import { FC } from 'react';

interface Props {
    title: string;
}

export const WorkCheck: FC<Props> = ({ title, children }) => {
    return (
        <section>
            <h1>{title}</h1>
            {children}
        </section>
    );
};
