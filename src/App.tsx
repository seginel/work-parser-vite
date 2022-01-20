import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ValidVisibilityContext } from './context/ValidVisibilityContext';
import { ValidVisibility } from './components/ValidVisibility/ValidVisibility';
import { initIdb } from './hooks/useIdb';
import { WorkKey } from './types/idb';
import { WorkChecker } from './components/WorkChecker/WorkChecker';
import { FIRST_WORK_CLASS_NAMES } from './templates/how-to-learn/classNames';
import { FIRST_WORK_FILE_LIST } from './templates/how-to-learn/fileList';
import { FIRST_BRIEF_CONDITIONS } from './components/FirstBriefChecker/FirstBriefConditions';
import { FIRST_WORK_HTML_TEMPLATE } from './templates/how-to-learn/template';
import { SECOND_WORK_CLASS_NAMES } from './templates/how-to-learn-2/classNames';
import { SECOND_WORK_FILE_LIST } from './templates/how-to-learn-2/fileList';
import { SECOND_BRIEF_CONDITIONS } from './components/FirstBriefChecker/SecondBriefConditions';
import { SECOND_WORK_HTML_TEMPLATE } from './templates/how-to-learn-2/template';

function App() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        initIdb().then(() => {
            setReady(true);
        });
    });

    const [visibility, setVisibility] = useState(false);

    if (!ready) {
        return <div>Прогреваемся</div>;
    }

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
                                    <WorkChecker
                                        workKey={WorkKey.first}
                                        classList={FIRST_WORK_CLASS_NAMES}
                                        fileList={FIRST_WORK_FILE_LIST}
                                        brief={FIRST_BRIEF_CONDITIONS}
                                        cssFileMask={'styles/style.css'}
                                        templateFileName={'template1'}
                                        title={'1 работа'}
                                    />
                                    <WorkChecker
                                        workKey={WorkKey.second}
                                        classList={SECOND_WORK_CLASS_NAMES}
                                        fileList={SECOND_WORK_FILE_LIST}
                                        brief={SECOND_BRIEF_CONDITIONS}
                                        cssFileMask={'blocks/'}
                                        templateFileName={'template2'}
                                        title={'2 работа'}
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
