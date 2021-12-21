import React, {useEffect} from 'react';
import './App.css';
import {restoreState} from './LocalStorageFunctions/storage';
import {useDispatch, useSelector} from 'react-redux';
import {initState} from './redux/selectors';
import {CommonActionType, setErrorState, setInitialState, ValuesType} from './redux/store-reducer';
import {Dispatch} from 'redux';
import {Settings} from './Components/Settings/Settings';
import {CountContainer} from './Components/CountContainer/CountContainer';

function App() {

    const dispatch = useDispatch<Dispatch<CommonActionType>>()

    const values = useSelector(initState).values

    useEffect(() => {
        let state = restoreState<ValuesType>('values', values)
        if (state) {
            dispatch(setErrorState(false, 'enter values and press "set"'))
            dispatch(setInitialState(state, state.max, state.start, state.start))
        } else dispatch(setErrorState(true, 'enter values and press "set"'))
    }, [])

    return (
        <div className={'head-container'}>
            <Settings/>
            <CountContainer/>
        </div>
    );
}

export default App;
