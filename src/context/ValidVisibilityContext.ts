import React from 'react';

export const ValidVisibilityContext = React.createContext({
    visibility: false,
    setVisibility: (visible: boolean) => {},
});
