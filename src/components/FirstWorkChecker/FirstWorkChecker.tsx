import { useEffect, useState } from 'react';
import { ZipParser } from '../ZipParser/ZipParser';
import JSZip from 'jszip';
import { FilesExistingChecker } from '../FilesExistingChecker/FilesExistingChecker';
import { ScreenshotMatch } from '../ScreenshotMatch/ScreenshotMatch';
import { FILE_LIST } from '../../templates/fileList';
import link from './../ScreenshotMatch/edge-chromium/page.png';
import { fetchImage } from '../../utils/fetch-image.utils';

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
            <ScreenshotMatch zip={work} />
        </>
    );
};
