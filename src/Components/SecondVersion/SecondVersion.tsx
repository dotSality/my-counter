import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {CommonActionType, setErrorState, setInitialState, ValuesType} from '../../redux/second-reducer';
import {initStateSecond} from '../../redux/selectors';
import React, {useEffect, useState} from 'react';
import {restoreState} from '../../LocalStorageFunctions/storage';
import {SecondSettings} from './SecondSettings/SecondSettings';
import {SecondButtons} from './SecondButtons/SecondButtons';
import s from './Second.module.css';
import {SecondCount} from './SecondCount/SecondCount';

export const SecondVersion = () => {

    const [settings, setSettings] = useState<boolean>(false)
    const toggleSettings = () => setSettings(!settings)

    const dispatch = useDispatch<Dispatch<CommonActionType>>()

    const {values} = useSelector(initStateSecond)

    useEffect(() => {
        let state = restoreState<ValuesType>('second-values', values)
        if (state) {
            dispatch(setErrorState(false, 'enter values and press "set"'))
            dispatch(setInitialState(state, state.max, state.start, state.start))
        } else dispatch(setErrorState(true, 'enter values and press "set"'))
    }, [])

    return (
        <div className={s.secondWindow}>
            <div className={s.container}>
                {settings ? <SecondSettings/> : <SecondCount/>}
                <SecondButtons settings={settings} toggleSettings={toggleSettings}/>
            </div>
        </div>
    );
}