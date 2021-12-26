import { FC, useState } from 'react';
import { getValidityEmoji } from '../../utils/emoji.utils';

interface Props {
    title: string;
    valid?: boolean;
}

export const Collapse: FC<Props> = ({ title, children, valid }) => {
    const [collapsed, setCollapsed] = useState(true);

    const validity = valid === undefined ? null : getValidityEmoji(valid);

    return (
        <section>
            <h2
                onClick={() => {
                    setCollapsed((value) => !value);
                }}
            >
                {title} {validity}
            </h2>
            {!collapsed && <div>{children}</div>}
        </section>
    );
};
