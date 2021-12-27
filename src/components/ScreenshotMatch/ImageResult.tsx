import { FC, useEffect, useRef } from 'react';

interface Props {
    imageData: ImageData;
    pixelCount: number;
}

export const ImageResult: FC<Props> = ({ imageData, pixelCount }) => {
    const ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const canvas = document.createElement('canvas');
        const ctx2 = canvas.getContext('2d');
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        ctx2!.putImageData(imageData, 0, 0);

        ref.current!.src = canvas.toDataURL('image/png');
    }, [imageData, ref.current]);

    return (
        <div>
            <div>Разница пикселей: {pixelCount}</div>
            <img ref={ref} />
        </div>
    );
};
