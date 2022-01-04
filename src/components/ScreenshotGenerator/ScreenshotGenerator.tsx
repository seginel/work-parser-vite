/* eslint-disable */

import * as React from 'react';
import { FC, useRef, useState } from 'react';
import download from 'downloadjs';
import { detect } from 'detect-browser';
import { IframeSrcDoc } from '../IframeSrcDoc/IframeSrcDoc';
import JSZip from 'jszip';
import {
    IFRAME_MAX_WIDTH,
    IFRAME_MIN_WIDTH,
} from '../../constants/iframe.constants';
import { delay } from '../../utils/delay.utils';
import { getImages } from '../../utils/images.utils';

interface Props {
    html: string;
    classList: string[];
    title: string;
}

export const ScreenshotGenerator: FC<Props> = ({ html, classList, title }) => {
    const ref = useRef<HTMLIFrameElement>(null);
    const [iframeWidth, setIframeWidth] = useState(IFRAME_MIN_WIDTH);
    const [generationState, setGenerationState] = useState(false);

    const handleClick = async () => {
        const browser = detect();

        setGenerationState(true);
        setIframeWidth(IFRAME_MIN_WIDTH);
        await delay();

        const images = await getImages(
            ref.current?.contentWindow?.document,
            IFRAME_MIN_WIDTH,
            classList,
        );

        setIframeWidth(IFRAME_MAX_WIDTH);
        await delay();

        const imagesWide = await getImages(
            ref.current?.contentWindow?.document,
            IFRAME_MAX_WIDTH,
            classList,
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

        setGenerationState(false);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                maxWidth: '300px',
            }}
        >
            <h1>{title}</h1>
            <button onClick={handleClick}>Get images</button>
            {generationState && (
                <IframeSrcDoc ref={ref} html={html} width={iframeWidth} />
            )}
        </div>
    );
};
