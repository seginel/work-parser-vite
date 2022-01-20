import * as React from 'react';
import JSZip from 'jszip';
import { FC } from 'react';
import { getZipWithoutFolderPrefix } from '../../utils/zip.utils';

interface Props {
    onWorkLoad: (jszip: JSZip) => void;
}

export const ZipParser: FC<Props> = ({ onWorkLoad }) => {
    const onChangeFile = async (event: any) => {
        const zipContent = await getZipWithoutFolderPrefix(
            event.target.files[0],
        );

        onWorkLoad(zipContent);
    };

    return (
        <div>
            <input type="file" name="file" onChange={onChangeFile} />
        </div>
    );
};
