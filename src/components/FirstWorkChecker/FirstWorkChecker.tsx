import { useEffect, useState } from 'react';
import { ZipParser } from '../ZipParser/ZipParser';
import JSZip from 'jszip';
import { FilesExistingChecker } from '../FilesExistingChecker/FilesExistingChecker';
import { ScreenshotMatch } from '../ScreenshotMatch/ScreenshotMatch';
import { FILE_LIST } from '../../templates/fileList';
import { SectionChecker } from '../SectionChecker/SectionChecker';
import { CLASS_NAMES } from '../../templates/how-to-learn/classNames';

export const FirstWorkChecker = () => {
    const [work, setWork] = useState<JSZip | null>(null);

    // useEffect(() => {
    //     async function f() {
    //         const datadata = await fetchImage(link);
    //     }
    //
    //     f();
    // }, []);

    if (!work) {
        return <ZipParser onWorkLoad={setWork} />;
    }

    return (
        <>
            <FilesExistingChecker zip={work} fileList={FILE_LIST} />
            <SectionChecker zip={work} sectionList={CLASS_NAMES} />
            <ScreenshotMatch zip={work} />
        </>
    );
};
