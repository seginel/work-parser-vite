import { useState } from 'react';
import { ZipParser } from '../ZipParser/ZipParser';
import JSZip from 'jszip';
import { FilesExistingChecker } from '../FilesExistingChecker/FilesExistingChecker';
import { FIRST_WORK_FILE_LIST } from '../../templates/how-to-learn/fileList';
import { SectionChecker } from '../SectionChecker/SectionChecker';
import { FIRST_WORK_CLASS_NAMES } from '../../templates/how-to-learn/classNames';
import { HtmlValidation } from '../HtmlValidation/HtmlValiidation';
import { BemValidation } from '../BemValidation/BemValidation';
import { FirstWorkScreenshotMatcher } from '../FirstWorkScreenshotMatcher/FirstWorkScreenshotMatcher';
import { useUnzipContent } from '../../hooks/useUnzipContent';
import { BriefChecker } from '../BriefChecker/BriefChecker';
import { FIRST_BRIEF_CONDITIONS } from '../FirstBriefChecker/FirstBriefConditions';

export const FirstWorkChecker = () => {
    const [work, setWork] = useState<JSZip | null>(null);
    const { html, css } = useUnzipContent(work, ['styles/style.css']);

    if (!work) {
        return (
            <>
                <ZipParser onWorkLoad={setWork} title="1 работа" />
            </>
        );
    }

    return (
        <>
            <BriefChecker
                html={html}
                css={css}
                conditions={FIRST_BRIEF_CONDITIONS}
            />
            <HtmlValidation html={html} />
            <BemValidation html={html} />
            <FilesExistingChecker zip={work} fileList={FIRST_WORK_FILE_LIST} />
            <SectionChecker html={html} sectionList={FIRST_WORK_CLASS_NAMES} />
            <FirstWorkScreenshotMatcher html={html} css={css} />
        </>
    );
};
