import { useState } from 'react';
import { ZipParser } from '../ZipParser/ZipParser';
import JSZip from 'jszip';
import { FilesExistingChecker } from '../FilesExistingChecker/FilesExistingChecker';

const FILE_LIST = [
    '.editorconfig',
    'images/',
    'images/facebook_color_white.svg',
    'images/feynman.png',
    'images/header-image.png',
    'images/instagram_color_white.svg',
    'images/kaufman-triangle.svg',
    'images/logo_place_footer.svg',
    'images/logo_place_header.svg',
    'images/vk_color_white.svg',
    'index.html',
    'styles/',
    'styles/normalize.css',
    'styles/style.css',
    'texts.md',
];

export const FirstWorkChecker = () => {
    const [work, setWork] = useState<JSZip | null>(null);

    if (!work) {
        return <ZipParser onWorkLoad={setWork} />;
    }

    return (
        <>
            <FilesExistingChecker zip={work} fileList={FILE_LIST} />
        </>
    );
};
