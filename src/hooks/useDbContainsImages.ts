import { CollectionKey, WorkKey } from '../types/idb';
import { useEffect, useState } from 'react';
import { idb } from './useIdb';
import { getFileKey } from '../utils/idb.utils';
import { IframeSize } from '../constants/iframe.constants';

export const useDbContainsImages = (
    workKey: WorkKey,
    list: string[],
    trigger: number,
) => {
    const [loading, setLoading] = useState(true);
    const [contains, setContains] = useState(false);

    useEffect(() => {
        async function check() {
            const keys = await idb.getAllKeys(CollectionKey.images);

            setContains(
                list.every((item) => {
                    return (
                        keys.includes(
                            getFileKey(workKey, item, IframeSize.min),
                        ) &&
                        keys.includes(getFileKey(workKey, item, IframeSize.max))
                    );
                }),
            );
            setLoading(false);
        }

        check();
    }, [trigger, list, workKey]);

    return {
        contains,
        loading,
    };
};
