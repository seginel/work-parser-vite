import { useEffect, useState } from 'react';
import JSZip from 'jszip';

interface FileList {
    html: string;
    css: string[];
}

export const useUnzipContent = (zip: JSZip | null, cssList: string[]) => {
    const [html, setHtml] = useState<string>();
    const [css, setCss] = useState<string>();

    useEffect(() => {
        async function handleZip() {
            if (!zip) {
                return;
            }

            const [index, ...style] = await Promise.all([
                zip.files['index.html'].async('text'),
                ...cssList.map((fileName) => zip.files[fileName].async('text')),
            ]);

            setHtml(index);
            setCss(style.join(''));
        }

        handleZip();
    }, [setHtml, setCss, zip]);

    return { html, css };
};
