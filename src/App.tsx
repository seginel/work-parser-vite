import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ScreenshotGenerator } from './components/ScreenshotGenerator/ScreenshotGenerator';
import { FirstWorkChecker } from './components/FirstWorkChecker/FirstWorkChecker';
import { FIRST_WORK_HTML_TEMPLATE } from './templates/how-to-learn/template';
import { FIRST_WORK_CLASS_NAMES } from './templates/how-to-learn/classNames';
import { SECOND_WORK_HTML_TEMPLATE } from './templates/how-to-learn-2/template';
import { SECOND_WORK_CLASS_NAMES } from './templates/how-to-learn-2/classNames';
import { SecondWorkChecker } from './components/SecondWorkChecker/SecondWorkChecker';
import { useState } from 'react';
import { ValidVisibilityContext } from './context/ValidVisibilityContext';
import { ValidVisibility } from './components/ValidVisibility/ValidVisibility';
import { WorkCheck } from './components/WorkCheck/WorkCheck';

function App() {
    const [visibility, setVisibility] = useState(false);

    return (
        <div className={'App'}>
            <BrowserRouter basename={import.meta.env.BASE_URL}>
                <ValidVisibilityContext.Provider
                    value={{ visibility, setVisibility }}
                >
                    <ValidVisibility />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <WorkCheck title={'1 работа'}>
                                        <FirstWorkChecker />
                                    </WorkCheck>
                                    <WorkCheck title={'2 работа'}>
                                        <SecondWorkChecker />
                                    </WorkCheck>
                                </>
                            }
                        />
                        <Route
                            path="/generator"
                            element={
                                <>
                                    <ScreenshotGenerator
                                        title={
                                            'Генерация картинок первой работы'
                                        }
                                        html={FIRST_WORK_HTML_TEMPLATE}
                                        classList={FIRST_WORK_CLASS_NAMES}
                                    />
                                    <ScreenshotGenerator
                                        title={
                                            'Генерация картинок второй работы'
                                        }
                                        html={SECOND_WORK_HTML_TEMPLATE}
                                        classList={SECOND_WORK_CLASS_NAMES}
                                    />
                                </>
                            }
                        />
                    </Routes>
                </ValidVisibilityContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
