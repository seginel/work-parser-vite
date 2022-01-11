import { WorkKey } from '../../types/idb';
import { FC, useState } from 'react';
import JSZip from 'jszip';
import { useUnzipContent } from '../../hooks/useUnzipContent';
import { useDbContainsImages } from '../../hooks/useDbContainsImages';
import { ScreenshotGenerator } from '../ScreenshotGenerator/ScreenshotGenerator';
import { ZipParser } from '../ZipParser/ZipParser';
import { BriefChecker } from '../BriefChecker/BriefChecker';
import { HtmlValidation } from '../HtmlValidation/HtmlValiidation';
import { BemValidation } from '../BemValidation/BemValidation';
import { FilesExistingChecker } from '../FilesExistingChecker/FilesExistingChecker';
import { SectionChecker } from '../SectionChecker/SectionChecker';
import { BriefCondition } from '../../types/BriefCondtition';
import { getBodyFromHtmlWithStyle } from '../../utils/html.utils';
import { DEV_MIX } from '../../templates/common';
import { ScreenshotMatch } from '../ScreenshotMatch/ScreenshotMatch';

interface Props {
    workKey: WorkKey;
    classList: string[];
    fileList: string[];
    cssFileMask: string;
    template: string;
    brief: BriefCondition[];
}

export const WorkChecker: FC<Props> = ({
    workKey,
    classList,
    fileList,
    cssFileMask,
    template,
    brief,
}) => {
    const [work, setWork] = useState<JSZip | null>(null);
    const { html, css } = useUnzipContent(work, cssFileMask);
    const [trigger, setTrigger] = useState(0);

    const { contains, loading } = useDbContainsImages(
        workKey,
        classList,
        trigger,
    );

    if (!loading && !contains) {
        return (
            <ScreenshotGenerator
                title={'Генерация картинок первой работы'}
                html={template}
                classList={classList}
                workKey={workKey}
                onComplete={() => setTrigger(Date.now())}
            />
        );
    }

    if (!work) {
        return (
            <>
                <ZipParser onWorkLoad={setWork} />
            </>
        );
    }

    return (
        <>
            <BriefChecker html={html} css={css} conditions={brief} />
            <HtmlValidation html={html} />
            <BemValidation html={html} />
            <FilesExistingChecker zip={work} fileList={fileList} />
            <SectionChecker html={html} sectionList={classList} />
            <ScreenshotMatch
                html={getBodyFromHtmlWithStyle(html, css, DEV_MIX)}
                classNames={classList}
                workKey={workKey}
            />
        </>
    );
};
