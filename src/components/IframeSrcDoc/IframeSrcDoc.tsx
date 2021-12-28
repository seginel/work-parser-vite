import * as React from 'react';
import { IFRAME_MIN_WIDTH } from '../../constants/iframe.constants';

interface Props {
    html: string;
    onLoad?: () => void;
    width?: number;
}

export const IframeSrcDoc = React.forwardRef<HTMLIFrameElement, Props>(
    ({ html, onLoad, width = IFRAME_MIN_WIDTH }, ref) => {
        return (
            <iframe
                ref={ref}
                style={{
                    width: `${width}px`,
                    minHeight: '100vh',
                    border: 'none',
                }}
                id="myiframe"
                srcDoc={html}
                onLoad={onLoad}
            />
        );
    },
);
