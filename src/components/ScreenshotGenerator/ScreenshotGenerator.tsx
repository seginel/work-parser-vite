/* eslint-disable */

import * as React from 'react';
import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { css, html, normalize } from '../../templates/how-to-learn/template';
import download from 'downloadjs';
import { getBodyFromHtmlWithStyle } from '../../utils/html.utils';
import { detect } from 'detect-browser';
import { CLASS_NAMES } from '../../templates/how-to-learn/classNames';
import { IframeSrcDoc } from '../IframeSrcDoc/IframeSrcDoc';
import JSZip from 'jszip';
import {
    IFRAME_MAX_WIDTH,
    IFRAME_MIN_WIDTH,
} from '../../constants/iframe.constants';
import { delay } from '../../utils/delay.utils';

export const ScreenshotGenerator = () => {
    const ref = useRef<HTMLIFrameElement>(null);
    const [iframeWidth, setIframeWidth] = useState(IFRAME_MIN_WIDTH);

    const handleClick = async () => {
        const browser = detect();

        setIframeWidth(IFRAME_MIN_WIDTH);
        await delay(100);

        const images = await getImages(IFRAME_MIN_WIDTH);

        setIframeWidth(IFRAME_MAX_WIDTH);
        await delay(100);

        const imagesWide = await getImages(IFRAME_MAX_WIDTH);

        const zip = [...images, ...imagesWide].reduce(
            (ar, { className, image, width }) => {
                const imgUrl = image.toDataURL('image/png');
                ar.file(
                    `${browser?.name}/${width}/${className}.png`,
                    imgUrl.split('base64,')[1],
                    {
                        base64: true,
                    },
                );

                return ar;
            },
            new JSZip(),
        );

        download(
            await zip.generateAsync({ type: 'blob' }),
            `${browser?.name}.zip`,
        );

        async function getImages(width: number) {
            return await Promise.all(
                CLASS_NAMES.map(async (className) => {
                    const element =
                        ref.current?.contentWindow?.document.querySelector(
                            `.${className}`,
                        );

                    const image = await html2canvas(element as HTMLElement, {
                        useCORS: true,
                        scale: 1,
                    });

                    return { className, image, width };
                }),
            );
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <button onClick={handleClick}>Get images</button>
            <IframeSrcDoc
                ref={ref}
                html={getBodyFromHtmlWithStyle(html, css, normalize)}
                width={iframeWidth}
            />
        </div>
    );
};
