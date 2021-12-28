import { CLASS_NAMES } from '../templates/how-to-learn/classNames';
import html2canvas from 'html2canvas';

export async function getImages(
    doc: Document | undefined | null,
    targetWidth: number,
    classNames: string[],
) {
    if (!doc) {
        return [];
    }

    return await Promise.all(
        classNames.map(async (className) => {
            const element = doc.querySelector(`.${className}`);

            const image = await html2canvas(element as HTMLElement, {
                useCORS: true,
                scale: 1,
            });

            return { className, image, targetWidth };
        }),
    );
}
