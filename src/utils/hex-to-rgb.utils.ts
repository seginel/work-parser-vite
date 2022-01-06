export const getRgbFromHex = (hex: string) => {
    const regExpExecArray = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
        hex,
    );
    if (!regExpExecArray) {
        return '';
    }

    const { r, g, b } = {
        r: parseInt(regExpExecArray[1], 16),
        g: parseInt(regExpExecArray[2], 16),
        b: parseInt(regExpExecArray[3], 16),
    };

    return `rgb(${r}, ${g}, ${b})`;
};
