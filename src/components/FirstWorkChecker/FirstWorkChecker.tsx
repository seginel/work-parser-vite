import { useState } from 'react';
import { ZipParser } from '../ZipParser/ZipParser';
import JSZip from 'jszip';
import { FilesExistingChecker } from '../FilesExistingChecker/FilesExistingChecker';
import { FILE_LIST } from '../../templates/fileList';
import { SectionChecker } from '../SectionChecker/SectionChecker';
import { FIRST_WORK_CLASS_NAMES } from '../../templates/how-to-learn/classNames';
import { HtmlValidation } from '../HtmlValidation/HtmlValiidation';
import { BemValidation } from '../BemValidation/BemValidation';
import { FirstWorkScreenshotMatcher } from '../FirstWorkScreenshotMatcher/FirstWorkScreenshotMatcher';
import { useUnzipContent } from '../../hooks/useUnzipContent';

export const FirstWorkChecker = () => {
    const [work, setWork] = useState<JSZip | null>(null);
    const { html } = useUnzipContent(work);

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
            <FilesExistingChecker zip={work} fileList={FILE_LIST} />
            <SectionChecker html={html} sectionList={FIRST_WORK_CLASS_NAMES} />
            <FirstWorkScreenshotMatcher zip={work} />
        </>
    );
};
