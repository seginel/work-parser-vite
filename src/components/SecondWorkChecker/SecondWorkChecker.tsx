import { useState } from 'react';
import { ZipParser } from '../ZipParser/ZipParser';
import JSZip from 'jszip';
import { FilesExistingChecker } from '../FilesExistingChecker/FilesExistingChecker';
import { SectionChecker } from '../SectionChecker/SectionChecker';
import { HtmlValidation } from '../HtmlValidation/HtmlValiidation';
import { BemValidation } from '../BemValidation/BemValidation';
import { useUnzipContent } from '../../hooks/useUnzipContent';
import { SECOND_WORK_CLASS_NAMES } from '../../templates/how-to-learn-2/classNames';
import {
    SECOND_WORK_CSS_FILES,
    SECOND_WORK_FILE_LIST,
} from '../../templates/how-to-learn-2/fileList';
import { SecondWorkScreenshotMatcher } from '../SecondWorkScreenshotMatcher/SecondWorkScreenshotMatcher';

export const SecondWorkChecker = () => {
    const [work, setWork] = useState<JSZip | null>(null);
    const { html, css } = useUnzipContent(work, SECOND_WORK_CSS_FILES);

    if (!work) {
        return (
            <>
                <ZipParser onWorkLoad={setWork} />
            </>
        );
    }

    return (
        <>
            <HtmlValidation html={html} />
            <BemValidation html={html} />
            <FilesExistingChecker zip={work} fileList={SECOND_WORK_FILE_LIST} />
            <SectionChecker html={html} sectionList={SECOND_WORK_CLASS_NAMES} />
            <SecondWorkScreenshotMatcher html={html} css={css} />
        </>
    );
};
