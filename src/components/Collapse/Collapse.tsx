import { FC, useState } from 'react';
import { getValidityEmoji } from '../../utils/emoji.utils';

interface Props {
    title: string;
    valid?: boolean;
    size?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Collapse: FC<Props> = ({ title, children, valid, size = 2 }) => {
    const Tag = `h${size}` as keyof JSX.IntrinsicElements;
    const [collapsed, setCollapsed] = useState(true);

    const validity = valid === undefined ? null : getValidityEmoji(valid);

    return (
        <section>
            <Tag
                onClick={() => {
                    setCollapsed((value) => !value);
                }}
            >
                {title} {validity}
            </Tag>
            {!collapsed && <div>{children}</div>}
        </section>
    );
};
