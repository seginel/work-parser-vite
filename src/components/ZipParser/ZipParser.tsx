import * as React from 'react';
import JSZip from 'jszip';
import { FC, useState } from 'react';
import { uniqId } from '../../utils/uniq-id.utils';

interface Props {
    onWorkLoad: (jszip: JSZip) => void;
}

export const ZipParser: FC<Props> = ({ onWorkLoad }) => {
    const onChangeFile = async (event: any) => {
        const zipContent = await JSZip.loadAsync(event.target.files[0]);

        const fileList = Object.keys(zipContent.files);

        if (zipContent.files[fileList[0]].dir) {
            const rootDirectoryName = zipContent.files[fileList[0]].name;

            zipContent.files = fileList.slice(1).reduce((sum, key) => {
                sum[key.replace(rootDirectoryName, '')] = zipContent.files[key];

                return sum;
            }, {} as Record<string, JSZip.JSZipObject>);
        }

        // console.log(zipContent);
        //
        // const index = await zipContent.files["how-to-learn-main/index.html"].async('text')
        // console.log(index);

        onWorkLoad(zipContent);
    };

    return (
        <div>
            <input type="file" name="file" onChange={onChangeFile} />
        </div>
    );
};
