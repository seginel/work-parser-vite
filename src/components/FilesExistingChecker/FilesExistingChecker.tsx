import JSZip from 'jszip';
import { FC } from 'react';
import { Collapse } from '../Collapse/Collapse';
import { getValidityEmoji } from '../../utils/emoji.utils';

interface Props {
    zip: JSZip;
    fileList: string[];
}

export const FilesExistingChecker: FC<Props> = ({ zip, fileList }) => {
    const allFilesExist = fileList.every((fileName) =>
        fileName.split('|').some((name) => zip.files[name]),
    );

    return (
        <Collapse title={'Файлы'} valid={allFilesExist}>
            {fileList.map((key) => (
                <div key={key}>
                    {getValidityEmoji(!!zip.files[key])} {key}
                </div>
            ))}
        </Collapse>
    );
};
