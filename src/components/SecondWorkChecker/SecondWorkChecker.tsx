import { useState } from 'react';
import { ZipParser } from '../ZipParser/ZipParser';
import JSZip from 'jszip';
import { FilesExistingChecker } from '../FilesExistingChecker/FilesExistingChecker';
import { FIRST_WORK_FILE_LIST } from '../../templates/fileList';
import { SectionChecker } from '../SectionChecker/SectionChecker';
import { HtmlValidation } from '../HtmlValidation/HtmlValiidation';
import { BemValidation } from '../BemValidation/BemValidation';
import { useUnzipContent } from '../../hooks/useUnzipContent';
import { SECOND_WORK_CLASS_NAMES } from '../../templates/how-to-learn-2/classNames';
import { SECOND_WORK_FILE_LIST } from '../../templates/how-to-learn-2/fileList';

export const SecondWorkChecker = () => {
    const [work, setWork] = useState<JSZip | null>(null);
    const { html } = useUnzipContent(work, []);

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
        </>
    );
};
