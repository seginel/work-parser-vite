export const getBodyFromHtmlWithStyle = (
    html: string,
    css: string,
    normalize: string,
) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');

    const style = doc.createElement('style');
    style.innerHTML = `${css} ${normalize}`;

    doc.querySelector('head')?.appendChild(style);

    return doc.documentElement.outerHTML;
};
