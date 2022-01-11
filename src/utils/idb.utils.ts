import { WorkKey } from '../types/idb';
import { IframeSize } from '../constants/iframe.constants';

export const getFileKey = (
    workKey: WorkKey,
    className: string,
    width: IframeSize,
) => `${workKey}-${className}-${width}`;
