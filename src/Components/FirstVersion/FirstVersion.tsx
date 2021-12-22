import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {CommonActionType, setErrorState, setInitialState, ValuesType} from '../../redux/store-reducer';
import s from './First.module.css'
import {initState} from '../../redux/selectors';
import React, {useEffect} from 'react';
import {restoreState} from '../../LocalStorageFunctions/storage';
import {FirstSettings} from './FirstSettings/FirstSettings';
import {FirstCount} from './FirstCount/FirstCount';

export const FirstVersion = () => {
    const dispatch = useDispatch<Dispatch<CommonActionType>>()

    const values = useSelector(initState).values

    useEffect(() => {
        let state = restoreState<ValuesType>('first-values', values)
        if (state) {
            dispatch(setErrorState(false, 'enter values and press "set"'))
            dispatch(setInitialState(state, state.max, state.start, state.start))
        } else dispatch(setErrorState(true, 'enter values and press "set"'))
    }, [])

    return (
        <div className={s.firstWindow}>
            <FirstSettings/>
            <FirstCount/>
        </div>
    );
}
