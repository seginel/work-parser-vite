import { FC, useEffect, useRef, useState } from 'react';
import * as React from 'react';
import pixelmatch from 'pixelmatch';
import { ImageResult } from './ImageResult';
import { Collapse } from '../Collapse/Collapse';
import { IframeSrcDoc } from '../IframeSrcDoc/IframeSrcDoc';
import { IframeSize } from '../../constants/iframe.constants';
import { delay } from '../../utils/delay.utils';
import { getImages } from '../../utils/images.utils';
import { idb } from '../../hooks/useIdb';
import { CollectionKey, WorkKey } from '../../types/idb';
import { getFileKey } from '../../utils/idb.utils';
import { fetchImage } from '../../utils/fetch-image.utils';

interface Props {
    html: string;
    classNames: string[];
    workKey: WorkKey;
}

export const ScreenshotMatch: FC<Props> = ({ html, classNames, workKey }) => {
    const ref = useRef<HTMLIFrameElement>(null);
    const [loaded, setLoaded] = useState(false);
    const [screenshots, setScreenshots] = useState<Awaited<
        ReturnType<typeof getImages>
    > | null>(null);
    const [diffs, setDiffs] = useState<
        Array<{ key: string; pixelCount: number; imageData: ImageData }>
    >([]);
    const [iframeWidth, setIframeWidth] = useState(IframeSize.min);

    const [elementsCausedScroll, setElementsCausedScroll] = useState<string[]>(
        [],
    );

    useEffect(() => {
        async function handleCheck() {
            if (!loaded) {
                return;
            }

            setIframeWidth(IframeSize.min);
            await delay();

            const images = await getImages(
                ref.current?.contentWindow?.document,
                IframeSize.min,
                classNames,
            );

            setIframeWidth(IframeSize.max);
            await delay();

            const imagesWide = await getImages(
                ref.current?.contentWindow?.document,
                IframeSize.max,
                classNames,
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
                    const idbKey = getFileKey(workKey, className, targetWidth);

                    const imageSrc = (await idb.get(
                        CollectionKey.images,
                        idbKey,
                    )) as string;

                    const template = await fetchImage(imageSrc);

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

    return (
        <div>
            {!screenshots && (
                <IframeSrcDoc
                    ref={ref}
                    html={html}
                    onLoad={() => setLoaded(true)}
                    width={iframeWidth}
                    idValue="myiframe"
                />
            )}
            <Collapse
                title={'Не скролиться по горизонтали'}
                valid={!elementsCausedScroll.length}
            >
                {elementsCausedScroll.length ? (
                    <div>
                        {elementsCausedScroll.map((element, index) => (
                            <div key={index}>{element}</div>
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
                            valid={
                                diff.pixelCount <
                                diff.imageData.height *
                                    diff.imageData.width *
                                    0.1
                            }
                            size={4}
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
