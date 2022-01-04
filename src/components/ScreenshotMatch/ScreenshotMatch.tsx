import JSZip from 'jszip';
import { FC, useEffect, useRef, useState } from 'react';
import { getBodyFromHtmlWithStyle } from '../../utils/html.utils';
import * as React from 'react';
import { detect } from 'detect-browser';
import { FIRST_WORK_CLASS_NAMES } from '../../templates/how-to-learn/classNames';
import pixelmatch from 'pixelmatch';
import { fetchImage } from '../../utils/fetch-image.utils';
import { ImageResult } from './ImageResult';
import { Collapse } from '../Collapse/Collapse';
import { useUnzipContent } from '../../hooks/useUnzipContent';
import { IframeSrcDoc } from '../IframeSrcDoc/IframeSrcDoc';
import {
    IFRAME_MAX_WIDTH,
    IFRAME_MIN_WIDTH,
} from '../../constants/iframe.constants';
import { delay } from '../../utils/delay.utils';
import { getImages } from '../../utils/images.utils';

interface Props {
    zip: JSZip;
}

// todo add browser matching

type a = ReturnType<typeof getImages>;

export const ScreenshotMatch: FC<Props> = ({ zip }) => {
    const ref = useRef<HTMLIFrameElement>(null);
    const [loaded, setLoaded] = useState(false);
    const [screenshots, setScreenshots] = useState<Awaited<
        ReturnType<typeof getImages>
    > | null>(null);
    const [diffs, setDiffs] = useState<
        Array<{ key: string; pixelCount: number; imageData: ImageData }>
    >([]);
    const [iframeWidth, setIframeWidth] = useState(IFRAME_MIN_WIDTH);

    const [elementsCausedScroll, setElementsCausedScroll] = useState<string[]>(
        [],
    );

    const { html, css, normalize } = useUnzipContent(zip);

    useEffect(() => {
        async function handleCheck() {
            setIframeWidth(IFRAME_MIN_WIDTH);
            await delay();

            const images = await getImages(
                ref.current?.contentWindow?.document,
                IFRAME_MIN_WIDTH,
                FIRST_WORK_CLASS_NAMES,
            );

            setIframeWidth(IFRAME_MAX_WIDTH);
            await delay();

            const imagesWide = await getImages(
                ref.current?.contentWindow?.document,
                IFRAME_MAX_WIDTH,
                FIRST_WORK_CLASS_NAMES,
            );

            setScreenshots([...images, ...imagesWide]);
        }

        setTimeout(() => handleCheck(), 1000);
    }, [loaded]);

    useEffect(() => {
        async function calcDiffs() {
            if (!screenshots) {
                return;
            }

            const diffsValues = await Promise.all(
                screenshots.map(async ({ targetWidth, className, image }) => {
                    const browser = detect();

                    const { images } = await import(
                        `./${browser!.name}/images.ts`
                    );

                    const template = await fetchImage(
                        images[targetWidth][className],
                    );

                    const target: HTMLCanvasElement = image;

                    const { width, height } = template;

                    const canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d')!;

                    const result = ctx.createImageData(width, height);

                    ctx.drawImage(template, 0, 0);

                    const templateImage = ctx.getImageData(
                        0,
                        0,
                        width,
                        height,
                    ).data;

                    const pixelCount = pixelmatch(
                        templateImage,
                        target
                            .getContext('2d')!
                            .getImageData(0, 0, width, height).data,
                        result.data,
                        width,
                        height,
                        {
                            threshold: 0.1,
                            includeAA: true,
                            diffColorAlt: [0, 0, 255],
                        },
                    );

                    return {
                        key: `${targetWidth}-${className}`,
                        pixelCount,
                        imageData: result,
                    };
                }),
            );

            setDiffs(diffsValues);
        }

        calcDiffs();
    }, [screenshots]);

    useEffect(() => {
        if (!loaded) {
            return;
        }

        setElementsCausedScroll(
            findElementsWhichCauseScroll(ref.current?.contentDocument),
        );
    }, [loaded, setElementsCausedScroll, ref.current]);

    if (!html || !css || !normalize) {
        return null;
    }

    return (
        <div>
            {!screenshots && (
                <IframeSrcDoc
                    ref={ref}
                    html={getBodyFromHtmlWithStyle(html, css, normalize)}
                    onLoad={() => setLoaded(true)}
                    width={iframeWidth}
                />
            )}
            <Collapse
                title={'Не скролиться по горизонтали'}
                valid={!elementsCausedScroll.length}
            >
                {elementsCausedScroll.length ? (
                    <div>
                        {elementsCausedScroll.map((element) => (
                            <div>{element}</div>
                        ))}
                    </div>
                ) : (
                    <div>Всё должно быть хорошо</div>
                )}
            </Collapse>
            <Collapse
                title={'Скриншоты'}
                valid={
                    diffs.reduce((sum, { pixelCount }) => sum + pixelCount, 0) <
                    30000
                }
            >
                {diffs.map((diff) => {
                    return (
                        <Collapse
                            key={diff.key}
                            title={`${diff.key}`}
                            valid={diff.pixelCount < 10000}
                            size={3}
                        >
                            <ImageResult {...diff} />
                        </Collapse>
                    );
                })}
            </Collapse>
        </div>
    );
};

function findElementsWhichCauseScroll(doc: Document | null | undefined) {
    if (!doc) {
        return [];
    }

    const docWidth = document.documentElement.offsetWidth;
    const elements = Array.from<HTMLElement>(doc.querySelectorAll('*'));

    return elements.reduce<string[]>((sum, element) => {
        const rect = element.getBoundingClientRect();

        if (
            (rect.right > docWidth || rect.left < 0) &&
            window.getComputedStyle(element).position !== 'absolute'
        ) {
            sum.push(element.className);
        }

        return sum;
    }, []);
}
