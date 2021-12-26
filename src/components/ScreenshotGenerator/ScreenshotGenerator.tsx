/* eslint-disable */

import * as React from "react";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { css, html } from "../../templates/how-to-learn/template";
import download from "downloadjs";
import { getBodyFromHtmlWithStyle } from "../../utils/html.utils";

export const ScreenshotGenerator = () => {
  const ref = useRef<HTMLIFrameElement>(null);

  const handleClick = async () => {
    const elements = Array.from(
      ref.current?.contentWindow?.document.querySelectorAll(".page") || [],
    );

    elements.map(async (element) => {
      console.log(element.className);

      const image = await html2canvas(element as HTMLElement, { useCORS: true });

      download(
        image
          .toDataURL("image/jpeg")
          .replace("image/jpeg", "image/octet-stream"),
        `${element.className}.jpg`,
      );
    });
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Get images</button>
      <iframe
        ref={ref}
        style={{ width: "100vw", height: "100vh", border: "none" }}
        id="myiframe"
        srcDoc={getBodyFromHtmlWithStyle(html, css)}
      />
    </div>
  );
};
