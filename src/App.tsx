import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {ScreenshotGenerator} from "./components/ScreenshotGenerator/ScreenshotGenerator";
import {FirstWorkChecker} from "./components/FirstWorkChecker/FirstWorkChecker";

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>home</Link>
        <Link to='/generator'>generator</Link>
      </nav>
      <Routes>
        <Route path="/" element={<FirstWorkChecker/>}/>
        <Route path="/generator" element={<ScreenshotGenerator/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
