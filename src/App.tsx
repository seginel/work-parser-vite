import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ScreenshotGenerator } from './components/ScreenshotGenerator/ScreenshotGenerator';
import { FirstWorkChecker } from './components/FirstWorkChecker/FirstWorkChecker';
import { FIRST_WORK_HTML_TEMPLATE } from './templates/how-to-learn/template';
import { FIRST_WORK_CLASS_NAMES } from './templates/how-to-learn/classNames';
import { SECOND_WORK_HTML_TEMPLATE } from './templates/how-to-learn-2/template';
import { SECOND_WORK_CLASS_NAMES } from './templates/how-to-learn-2/classNames';

function App() {
    return (
        <div className={'App'}>
            <BrowserRouter basename={import.meta.env.BASE_URL}>
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
                        element={
                            <>
                                {/*<ScreenshotGenerator
                                    title={'Генерация картинок первой работы'}
                                    html={FIRST_WORK_HTML_TEMPLATE}
                                    classList={FIRST_WORK_CLASS_NAMES}
                                />*/}
                                <ScreenshotGenerator
                                    title={'Генерация картинок второй работы'}
                                    html={SECOND_WORK_HTML_TEMPLATE}
                                    classList={SECOND_WORK_CLASS_NAMES}
                                />
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
