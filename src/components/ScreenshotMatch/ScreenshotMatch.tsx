import JSZip from 'jszip';
import { FC, useEffect, useRef, useState } from 'react';
import { getBodyFromHtmlWithStyle } from '../../utils/html.utils';
import * as React from 'react';
import { detect } from 'detect-browser';
import { CLASS_NAMES } from '../../templates/how-to-learn/classNames';
import html2canvas from 'html2canvas';
import pixelmatch from 'pixelmatch';
import { fetchImage } from '../../utils/fetch-image.utils';
import { ImageResult } from './ImageResult';
import { Collapse } from '../Collapse/Collapse';

interface Props {
    zip: JSZip;
}

// todo add browser matching

export const ScreenshotMatch: FC<Props> = ({ zip }) => {
    const ref = useRef<HTMLIFrameElement>(null);
    const refImg = useRef<HTMLImageElement>(null);
    const [html, setHtml] = useState<string>();
    const [css, setCss] = useState<string>();
    const [normalize, setNormalize] = useState<string>();
    const [loaded, setLoaded] = useState(false);
    const [screenshots, setScreenshots] = useState<Record<
        string,
        HTMLCanvasElement
    > | null>(null);
    const [diffs, setDiffs] = useState<
        Array<{ key: string; pixelCount: number; imageData: ImageData }>
    >([]);

    useEffect(() => {
        async function handleCheck() {
            const values = Object.fromEntries(
                await Promise.all(
                    CLASS_NAMES.map(async (key) => {
                        const element =
                            ref.current?.contentWindow?.document.querySelector(
                                `.${key}`,
                            );

                        const canvas = await html2canvas(
                            element as HTMLElement,
                            {
                                useCORS: true,
                                scale: 1,
                            },
                        );

                        return [key, canvas];
                    }),
                ),
            );

            setScreenshots(values);
        }

        setTimeout(() => handleCheck(), 1000);
    }, [loaded]);

    useEffect(() => {
        async function calcDiffs() {
            if (!screenshots) {
                return;
            }

            const diffsValues = await Promise.all(
                CLASS_NAMES.map(async (key) => {
                    const browser = detect();

                    const { images } = await import(
                        `./${browser!.name}/images.ts`
                    );

                    const template = await fetchImage(images[key]);

                    const target: HTMLCanvasElement = screenshots[key];

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

                    return { key, pixelCount, imageData: result };
                }),
            );

            setDiffs(diffsValues);
        }

        calcDiffs();
    }, [screenshots]);

    useEffect(() => {
        async function handleZip() {
            const [index, style, normalizeCss] = await Promise.all([
                zip.files['index.html'].async('text'),
                zip.files['styles/style.css'].async('text'),
                zip.files['styles/normalize.css'].async('text'),
            ]);

            setHtml(index);
            setCss(style);
            setNormalize(normalizeCss);
        }

        handleZip();
    }, [setHtml, setCss, setNormalize, zip]);

    if (!html || !css || !normalize) {
        return null;
    }

    return (
        <div>
            <iframe
                ref={ref}
                style={{
                    width: '100vw',
                    height: '100vh',
                    border: 'none',
                    display: screenshots ? 'none' : 'block',
                }}
                id="myiframe"
                srcDoc={getBodyFromHtmlWithStyle(html, css, normalize)}
            />
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
                        >
                            <ImageResult {...diff} />
                        </Collapse>
                    );
                })}
            </Collapse>
        </div>
    );
};
