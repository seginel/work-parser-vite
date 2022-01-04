import JSZip from 'jszip';
import { FC, useState } from 'react';
import { useAsync } from 'react-use';
import { detect } from 'detect-browser';
import { ScreenshotMatch } from '../ScreenshotMatch/ScreenshotMatch';
import { useUnzipContent } from '../../hooks/useUnzipContent';
import { getBodyFromHtmlWithStyle } from '../../utils/html.utils';
import { FIRST_WORK_CLASS_NAMES } from '../../templates/how-to-learn/classNames';

interface Props {
    zip: JSZip;
}

export const FirstWorkScreenshotMatcher: FC<Props> = ({ zip }) => {
    const { html, css } = useUnzipContent(zip);

    const { value, loading } = useAsync(async () => {
        const browser = detect();

        const { images } = await import(`./${browser!.name}/images.ts`);

        return images;
    });

    if (!html || !css || loading) {
        return null;
    }

    return (
        <ScreenshotMatch
            html={getBodyFromHtmlWithStyle(html, css)}
            classNames={FIRST_WORK_CLASS_NAMES}
            templates={value}
        />
    );
};
