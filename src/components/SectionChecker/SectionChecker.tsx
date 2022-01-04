import { FC, useEffect, useState } from 'react';
import { Collapse } from '../Collapse/Collapse';
import { getValidityEmoji } from '../../utils/emoji.utils';

interface Props {
    html: string | undefined;
    sectionList: string[];
}

export const SectionChecker: FC<Props> = ({ html, sectionList }) => {
    const [nodes, setNodes] = useState<Array<Element> | null>(null);

    useEffect(() => {
        if (!html) {
            return;
        }

        const parser = new DOMParser();
        const inputDocument = parser.parseFromString(html, 'text/html');

        const nodeList = inputDocument.querySelectorAll(
            `${sectionList.map((section) => `.${section}`).join(',')}`,
        );

        setNodes(Array.from(nodeList));
    }, [html]);

    if (!nodes) {
        return null;
    }

    return (
        <Collapse
            title={`Все секции созданы и в нужном порядке`}
            valid={nodes?.length === sectionList.length}
        >
            {sectionList.map((key, index) => (
                <div key={key}>
                    {getValidityEmoji(nodes?.[index].className.includes(key))}{' '}
                    {key}
                </div>
            ))}
        </Collapse>
    );
};
