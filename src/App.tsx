import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {ZipParser} from "./components/ZipParser/ZipParser";
import {ScreenshotGenerator} from "./components/ScreenshotGenerator/ScreenshotGenerator";

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>home</Link>
        <Link to='/generator'>generator</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ZipParser/>}/>
        <Route path="/generator" element={<ScreenshotGenerator/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
