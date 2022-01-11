import { normalizeCss } from '../templates/normalize';

export const getBodyFromHtmlWithStyle = (
    html: string = '',
    css: string = '',
    devMix: string = '',
) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');

    const style = doc.createElement('style');
    style.innerHTML = `${normalizeCss} ${css} ${devMix}`;

    doc.head.appendChild(style);

    const links = Array.from(doc.head.querySelectorAll('link'));

    links.forEach((link) => link.remove());

    return doc.documentElement.outerHTML.replaceAll(
        /\.{0,2}\/?images/g,
        `${import.meta.env.BASE_URL}images`,
    );
};
