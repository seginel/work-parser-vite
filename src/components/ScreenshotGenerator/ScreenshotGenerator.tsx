/* eslint-disable */

import * as React from 'react';
import { FC, useRef, useState } from 'react';
import { IframeSrcDoc } from '../IframeSrcDoc/IframeSrcDoc';
import { delay } from '../../utils/delay.utils';
import { getImages } from '../../utils/images.utils';
import { IframeSize } from '../../constants/iframe.constants';
import { WorkKey } from '../../types/idb';
import { getFileKey } from '../../utils/idb.utils';
import { idb } from '../../hooks/useIdb';
import JSZip from 'jszip';
import { useUnzipContent } from '../../hooks/useUnzipContent';
import { getBodyFromHtmlWithStyle } from '../../utils/html.utils';
import { DEV_MIX } from '../../templates/common';
import { getZipWithoutFolderPrefix } from '../../utils/zip.utils';

interface Props {
    classList: string[];
    title: string;
    workKey: WorkKey;
    onComplete: () => void;
    templateFileName: string;
    cssFileMask: string;
}

export const ScreenshotGenerator: FC<Props> = ({
    classList,
    title,
    workKey,
    onComplete,
    templateFileName,
    cssFileMask,
}) => {
    const ref = useRef<HTMLIFrameElement>(null);
    const [iframeWidth, setIframeWidth] = useState(IframeSize.min);
    const [generationState, setGenerationState] = useState(false);
    const [work, setWork] = useState<JSZip | null>(null);
    const { html, css } = useUnzipContent(work, cssFileMask);

    const handleClick = async () => {
        const zipFile = await fetch(
            `${import.meta.env.BASE_URL}templates/${templateFileName}.zip`,
        ).then((res) => res.blob());

        const zipContent = await getZipWithoutFolderPrefix(zipFile);

        setWork(zipContent);

        setGenerationState(true);
        setIframeWidth(IframeSize.min);
        await delay();

        const images = await getImages(
            ref.current?.contentWindow?.document,
            IframeSize.min,
            classList,
        );

        setIframeWidth(IframeSize.max);
        await delay();

        const imagesWide = await getImages(
            ref.current?.contentWindow?.document,
            IframeSize.max,
            classList,
        );

        await Promise.all(
            [...images, ...imagesWide].map(
                ({ className, image, targetWidth }) => {
                    idb.put(
                        'images',
                        image.toDataURL('image/png'),
                        getFileKey(workKey, className, targetWidth),
                    );
                },
            ),
        );

        setGenerationState(false);
        onComplete();
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
            {generationState && <div>Подождите 🕰</div>}
            {generationState && (
                <IframeSrcDoc
                    ref={ref}
                    html={getBodyFromHtmlWithStyle(html, css, DEV_MIX)}
                    width={iframeWidth}
                    idValue="myiframe"
                />
            )}
        </div>
    );
};
