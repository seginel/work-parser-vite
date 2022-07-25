import * as React from 'react';
import { IframeSize } from '../../constants/iframe.constants';

interface Props {
    html: string;
    onLoad?: () => void;
    width: IframeSize;
    idValue?: string;
}

export const IframeSrcDoc = React.memo(
    React.forwardRef<HTMLIFrameElement, Props>(
        ({ html, onLoad, width, idValue }, ref) => {
            return (
                <iframe
                    ref={ref}
                    style={{
                        width: `${width}px`,
                        minHeight: '100vh',
                        border: 'none',
                    }}
                    id={idValue}
                    srcDoc={html}
                    onLoad={onLoad}
                />
            );
        },
    ),
);
