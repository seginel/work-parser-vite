import JSZip from 'jszip';
import { FC } from 'react';
import { useUnzipContent } from '../../hooks/useUnzipContent';
import { Collapse } from '../Collapse/Collapse';
import {
    ERROR_TRANSLATION,
    getParentPath,
    validateNode,
} from './bem-validator';
import { getBodyFromHtmlWithStyle } from '../../utils/html.utils';

interface Props {
    zip: JSZip;
}

export const BemValidation: FC<Props> = ({ zip }) => {
    const { html, css, normalize } = useUnzipContent(zip);

    if (!html) {
        return null;
    }

    const doc = new DOMParser().parseFromString(html, 'text/html');

    const errors = validateNode(doc.body);

    return (
        <Collapse title={'БЭМ'} valid={!errors.length}>
            {errors.map(({ code, className, parentArray }, index) => {
                return (
                    <div key={index}>
                        <b>{ERROR_TRANSLATION.ru[code]}</b> Элемент:{' '}
                        <u>{className}</u> путь до элемента{' '}
                        <u>{getParentPath(parentArray)}</u>
                    </div>
                );
            })}
        </Collapse>
    );
};
