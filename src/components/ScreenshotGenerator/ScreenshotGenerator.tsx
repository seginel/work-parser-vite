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
import { getImages } from '../../utils/images.utils';

export const ScreenshotGenerator = () => {
    const ref = useRef<HTMLIFrameElement>(null);
    const [iframeWidth, setIframeWidth] = useState(IFRAME_MIN_WIDTH);

    const handleClick = async () => {
        const browser = detect();

        setIframeWidth(IFRAME_MIN_WIDTH);
        await delay();

        const images = await getImages(
            ref.current?.contentWindow?.document,
            IFRAME_MIN_WIDTH,
            CLASS_NAMES,
        );

        setIframeWidth(IFRAME_MAX_WIDTH);
        await delay();

        const imagesWide = await getImages(
            ref.current?.contentWindow?.document,
            IFRAME_MAX_WIDTH,
            CLASS_NAMES,
        );

        const zip = [...images, ...imagesWide].reduce(
            (ar, { className, image, targetWidth }) => {
                const imgUrl = image.toDataURL('image/png');
                ar.file(
                    `${browser?.name}/${targetWidth}/${className}.png`,
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
