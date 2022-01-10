import { FC } from 'react';
import useAsync from 'react-use/esm/useAsync';
import { detect } from 'detect-browser';
import { ScreenshotMatch } from '../ScreenshotMatch/ScreenshotMatch';
import { getBodyFromHtmlWithStyle } from '../../utils/html.utils';
import { FIRST_WORK_CLASS_NAMES } from '../../templates/how-to-learn/classNames';
import { DEV_MIX } from '../../templates/common';

interface Props {
    html: string | undefined;
    css: string | undefined;
}

export const FirstWorkScreenshotMatcher: FC<Props> = ({ html, css }) => {
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
            html={getBodyFromHtmlWithStyle(html, css, DEV_MIX)}
            classNames={FIRST_WORK_CLASS_NAMES}
            templates={value}
        />
    );
};
