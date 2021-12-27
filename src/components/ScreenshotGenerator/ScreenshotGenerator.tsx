/* eslint-disable */

import * as React from 'react';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { css, html, normalize } from '../../templates/how-to-learn/template';
import download from 'downloadjs';
import { getBodyFromHtmlWithStyle } from '../../utils/html.utils';
import { detect } from 'detect-browser';
import { CLASS_NAMES } from '../../templates/how-to-learn/classNames';

export const ScreenshotGenerator = () => {
    const ref = useRef<HTMLIFrameElement>(null);

    const handleClick = async () => {
        const browser = detect();

        console.log(browser?.name);

        CLASS_NAMES.map(async (className) => {
            const element = ref.current?.contentWindow?.document.querySelector(
                `.${className}`,
            );

            if (!element) {
                return;
            }

            const image = await html2canvas(element as HTMLElement, {
                useCORS: true,
                scale: 1,
            });

            download(
                image
                    .toDataURL('image/png')
                    .replace('image/png', 'image/octet-stream'),
                `${className}.png`,
            );
        });
    };

    return (
        <div className="App">
            <button onClick={handleClick}>Get images</button>
            <iframe
                ref={ref}
                style={{ width: '100vw', height: '100vh', border: 'none' }}
                id="myiframe"
                srcDoc={getBodyFromHtmlWithStyle(html, css, normalize)}
            />
        </div>
    );
};
