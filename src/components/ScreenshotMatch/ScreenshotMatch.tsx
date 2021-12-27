import JSZip from 'jszip';
import { FC, useEffect, useRef, useState } from 'react';
import { getBodyFromHtmlWithStyle } from '../../utils/html.utils';
import * as React from 'react';
import { detect } from 'detect-browser';
import { CLASS_NAMES } from '../../templates/how-to-learn/classNames';
import html2canvas from 'html2canvas';
import pixelmatch from 'pixelmatch';
import { fetchImage } from '../../utils/fetch-image.utils';
import download from 'downloadjs';
import targetImage from './target.png';

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

    useEffect(() => {
        async function handleCheck() {
            const browser = detect();

            const { images } = await import(`./${browser!.name}/images.ts`);

            const values = Object.fromEntries(
                await Promise.all(
                    ['page'].map(async (key) => {
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

                        // download(
                        //     canvas
                        //         .toDataURL('image/png')
                        //         .replace('image/png', 'image/octet-stream'),
                        //     `${'target'}.png`,
                        // );

                        return [key, canvas];
                    }),
                ),
            );

            const key = 'page';

            const template = await fetchImage(images[key]);
            const target: HTMLCanvasElement = values[key];

            const { width, height } = template;

            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d')!;

            const result = ctx.createImageData(width, height);

            const diff = pixelmatch(
                await fetchImageAndGet(images[key]),
                // await fetchImageAndGet(targetImage),
                target.getContext('2d')!.getImageData(0, 0, width, height).data,
                result.data,
                width,
                height,
                { threshold: 0.1 },
            );

            const canvas2 = document.createElement('canvas');
            const ctx2 = canvas2.getContext('2d');
            canvas2.width = width;
            canvas2.height = height;
            ctx2!.putImageData(result, 0, 0);

            refImg.current!.src = canvas2.toDataURL('image/png');

            async function fetchImageAndGet(src: string) {
                const image = await fetchImage(src);

                const canvas = document.createElement('canvas');
                canvas.width = image.width;
                canvas.height = image.height;
                const ctx = canvas.getContext('2d')!;

                ctx.drawImage(image, 0, 0);

                return ctx.getImageData(0, 0, width, height).data;
            }

            // renderResult();
            //
            // function renderResult() {
            //     const canvas = document.createElement('canvas');
            //     canvas.width = 100;
            //     canvas.height = 100;
            //     const ctx = canvas.getContext('2d');
            //     ctx!.fillStyle = 'red';
            //     ctx!.fillRect(0, 0, 100, 100);
            //
            //     refImg.current!.src = canvas.toDataURL('image/png');
            //
            //     console.log(canvas.toDataURL('image/png'));
            // }
        }

        setTimeout(() => handleCheck(), 1000);
    }, [loaded]);

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
                style={{ width: '100vw', height: '100vh', border: 'none' }}
                id="myiframe"
                srcDoc={getBodyFromHtmlWithStyle(html, css, normalize)}
            />
            <img
                ref={refImg}
                style={{ objectFit: 'contain', maxWidth: '700px' }}
            />
        </div>
    );
};
