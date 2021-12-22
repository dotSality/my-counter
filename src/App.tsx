import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {FirstVersion} from './Components/FirstVersion/FirstVersion';
import { SecondVersion } from './Components/SecondVersion/SecondVersion';
import { Navigation } from './Components/Navigation/Navigation';

function App() {

    return (
        <div className={'head-container'}>
            <Navigation/>
            <Routes>
                <Route path={'/first-ver/'} element={<FirstVersion/>}/>
                <Route path={'/second-ver/'} element={<SecondVersion/>}/>
            </Routes>
        </div>
    )
}

export default App;
