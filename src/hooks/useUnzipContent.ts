import { useEffect, useState } from 'react';
import JSZip from 'jszip';

interface FileList {
    html: string;
    css: string[];
}

export const useUnzipContent = (zip: JSZip | null, cssPrefix: string) => {
    const [html, setHtml] = useState<string>();
    const [css, setCss] = useState<string>();

    useEffect(() => {
        async function handleZip() {
            if (!zip) {
                return;
            }

            const cssFileNames = Object.keys(zip.files).filter((key) => {
                const file = zip.files[key];

                if (file.dir) {
                    return false;
                }

                return key.includes(cssPrefix);
            });

            const [index, ...style] = await Promise.all([
                zip.files['index.html'].async('text'),
                ...cssFileNames.map((key) => zip.files[key].async('text')),
            ]);

            setHtml(index);
            setCss(style.join(''));
        }

        handleZip();
    }, [setHtml, setCss, zip]);

    return { html, css };
};
