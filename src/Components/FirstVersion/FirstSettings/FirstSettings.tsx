import s from '../First.module.css'
import React, {ChangeEvent} from 'react';
import {CommonActionType, setCount, setErrorState, setMax, setStart, setValues, ValuesType} from '../../../redux/first-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {initStateFirst} from '../../../redux/selectors';
import {saveState} from '../../../LocalStorageFunctions/storage';

export const FirstSettings = () => {

    const dispatch = useDispatch<Dispatch<CommonActionType>>()
    const {
        max,
        start,
        error,
    } = useSelector(initStateFirst)

    const onMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(e.currentTarget.value)
        dispatch(setMax(value))
        if (value < 0 || value <= start) dispatch(setErrorState(true, 'incorrect values'))
        else dispatch(setErrorState(false, 'enter values and press "set"'))
    }

    const onStartInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(e.currentTarget.value)
        dispatch(setStart(value))
        if (value < 0 || value >= max) dispatch(setErrorState(true, 'incorrect values'))
        else dispatch(setErrorState(false, 'enter values and press "set"'))
    }

    const setCurrentStorage = () => {
        let newValues = {max: max, start: start}
        dispatch(setCount(newValues.start))
        dispatch(setValues(newValues))
        saveState<ValuesType>('first-values', newValues)
    }

    const inputErrorClassName = error ? s.errorInput : max === start ? s.errorInput : s.input

    return (
        <div className={s.container}>
            <label>Set max: <input className={inputErrorClassName} onChange={onMaxInputChange} value={max} type='number'/></label>
            <label>Set min: <input className={inputErrorClassName} onChange={onStartInputChange} value={start} type='number'/></label>
            <div className={s.buttonContainer}>
                <button
                    disabled={error ? true : max === start}
                    className={s.button}
                    onClick={setCurrentStorage}>Set</button>
            </div>
        </div>
    )
}