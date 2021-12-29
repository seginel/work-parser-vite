import { FC, useEffect, useState } from 'react';
import JSZip from 'jszip';
import { Collapse } from './Collapse/Collapse';

interface Props {
    zip: JSZip;
}

interface W3CMessage {
    message: string;
    lastLine: number;
    extract: string;
}

interface W3CResponse {
    messages: Array<W3CMessage>;
}

export const HtmlValidation: FC<Props> = ({ zip }) => {
    const [state, setState] = useState<Array<W3CMessage>>([]);

    useEffect(() => {
        async function getData() {
            const formData = new FormData();
            formData.append('out', 'json');
            formData.append(
                'content',
                await zip.files['index.html'].async('text'),
            );

            const response = await fetch('https://html5.validator.nu/', {
                method: 'POST',
                body: formData,
            });

            const data = (await response.json()) as W3CResponse;

            setState(data.messages);
        }

        getData();
    }, [zip]);

    return (
        <Collapse title={'Проверка валидатором W3C'} valid={!state.length}>
            {state.map(({ message, extract, lastLine }) => (
                <div key={message}>
                    line {lastLine}: <b>{extract}</b>, {message}
                </div>
            ))}
        </Collapse>
    );
};
