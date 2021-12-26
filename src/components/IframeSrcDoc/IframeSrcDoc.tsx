import * as React from "react";

interface Props {
  html: string;
}

export const IframeSrcDoc = React.forwardRef<HTMLIFrameElement, Props>(
  ({ html }, ref) => {
    return (
      <iframe
        ref={ref}
        style={{ width: "100vw", height: "100vh", border: "none" }}
        id="myiframe"
        srcDoc={html}
      />
    );
  },
);
