import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ScreenshotGenerator } from './components/ScreenshotGenerator/ScreenshotGenerator';
import { FirstWorkChecker } from './components/FirstWorkChecker/FirstWorkChecker';

function App() {
    return (
        <div className={'App'}>
            <BrowserRouter>
                <nav>
                    <Link to="/" className="link">
                        home
                    </Link>
                    <Link className="link" to="/generator">
                        generator
                    </Link>
                </nav>
                <Routes>
                    <Route path="/" element={<FirstWorkChecker />} />
                    <Route
                        path="/generator"
                        element={<ScreenshotGenerator />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
