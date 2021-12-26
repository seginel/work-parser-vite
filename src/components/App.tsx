import * as React from "react";
import { hot } from "react-hot-loader";

import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { ScreenshotGenerator } from "./ScreenshotGenerator/ScreenshotGenerator";
import { ZipParser } from "./ZipParser/ZipParser";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<div>123</div>} />
        </Routes>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
