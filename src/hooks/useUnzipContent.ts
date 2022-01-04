import { useEffect, useState } from 'react';
import JSZip from 'jszip';

interface FileList {
    html: string;
    css: string[];
}

export const useUnzipContent = (zip: JSZip) => {
    const [html, setHtml] = useState<string>();
    const [css, setCss] = useState<string>();
    const [normalize, setNormalize] = useState<string>();

    useEffect(() => {
        async function handleZip() {
            const [index, style, normalizeCss] = await Promise.all([
                zip.files['index.html'].async('text'),
                zip.files['styles/style.css'].async('text'),
                zip.files['styles/normalize.css'].async('text'),
            ]);

            setHtml(index);
            setCss(style);
            setNormalize(normalizeCss);
        }

        handleZip();
    }, [setHtml, setCss, setNormalize, zip]);

    return { html, css, normalize };
};
