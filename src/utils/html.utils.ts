import { normalizeCss } from '../templates/normalize';

export const getBodyFromHtmlWithStyle = (
    html: string,
    css: string,
    devMix: string = '',
) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');

    const style = doc.createElement('style');
    style.innerHTML = `${normalizeCss} ${css} ${devMix}`;

    doc.querySelector('head')?.appendChild(style);

    return doc.documentElement.outerHTML.replaceAll(
        /\.{0,2}\/?images/g,
        `${import.meta.env.BASE_URL}images`,
    );
};
