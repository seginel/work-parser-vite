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

interface Props {
    html: string;
    classList: string[];
    title: string;
    workKey: WorkKey;
    onComplete: () => void;
}

export const ScreenshotGenerator: FC<Props> = ({
    html,
    classList,
    title,
    workKey,
    onComplete,
}) => {
    const ref = useRef<HTMLIFrameElement>(null);
    const [iframeWidth, setIframeWidth] = useState(IframeSize.min);
    const [generationState, setGenerationState] = useState(false);

    const handleClick = async () => {
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
            {generationState && (
                <IframeSrcDoc ref={ref} html={html} width={iframeWidth} />
            )}
        </div>
    );
};
