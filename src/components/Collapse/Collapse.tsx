import { FC, useContext, useState } from 'react';
import { getValidityEmoji } from '../../utils/emoji.utils';
// import { ValidVisibilityContext } from '../../context/ValidVisibilityContext';

interface Props {
    title: string;
    valid?: boolean;
    size?: 1 | 2 | 3 | 4 | 5 | 6;
    initialCollapsed?: boolean;
    showArrow?: boolean;
}

export const Collapse: FC<Props> = ({
    title,
    children,
    valid,
    size = 2,
    initialCollapsed = true,
    showArrow= false,
}) => {
    // const { visibility } = {true};
    const Tag = `h${size}` as keyof JSX.IntrinsicElements;
    const [collapsed, setCollapsed] = useState(initialCollapsed);

    const validity = valid === undefined ? null : getValidityEmoji(valid);

    return (
        <section
            style={{
                opacity: !valid ? 1 : 0.5,
                borderBottom: '1px solid gray',
            }}
        >
            <Tag
                onClick={() => {
                    setCollapsed((value) => !value);
                }}
                style={{ cursor: children ? 'pointer' : 'default' }}
            >
                {title} {!showArrow && validity} {showArrow && "↓"}
            </Tag>
            {!collapsed && <div>{children}</div>}
        </section>
    );
};
