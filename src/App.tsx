import React, {ChangeEvent, useEffect, useState,Dispatch} from 'react';
import './App.css';
import {restoreState, saveState} from './LocalStorageFunctions/storage';
import {useDispatch, useSelector} from 'react-redux';
import {initState} from './redux/selectors';
import {CommonActionType, setCount, setCountMessage, setError, setMax, setStart, setValues, ValuesType} from './redux/store-reducer';

// export type ValuesType = {
//     [key: string]: number
// }

function App() {

    const dispatch = useDispatch<Dispatch<CommonActionType>>()

    const {
        values,
        max,
        start,
        count,
        countMessage,
        error,
    } = useSelector(initState)

    useEffect(() => {
        let state = restoreState<ValuesType>('values', values)
        if (state) {
            dispatch(setError(false))
            dispatch(setValues(state))
            dispatch(setMax(state.max))
            dispatch(setStart(state.start))
            dispatch(setCount(state.start))
        } else {
            dispatch(setCountMessage('enter values and press "set"'))
        }
    }, [])

    const onMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(e.currentTarget.value)
        dispatch(setMax(value))
        dispatch(setCountMessage('enter values and press "set"'))
        if (value < 0 || value <= start) {
            dispatch(setError(true))
            dispatch(setCountMessage('incorrect values'))
        } else dispatch(setError(false))
    }

    const onStartInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(e.currentTarget.value)
        setStart(value)
        dispatch(setCountMessage('enter values and press "set"'))
        if (value < 0 || value >= max) {
            dispatch(setError(true))
            dispatch(setCountMessage('incorrect values'))
        } else dispatch(setError(false))
    }

    const setCurrentStorage = () => {
        let newValues = {max: max, start: start}
        dispatch(setCount(newValues.start))
        dispatch(setValues(newValues))
        saveState<ValuesType>('values', newValues)
    }

    const setCurrentCount = () => {
        dispatch(setCount(count + 1))
    }
    const resetCurrentCount = () => {
        let state = restoreState<ValuesType>('values', values)
        if (state) dispatch(setCount(state.start))
    }

    const output = restoreState<ValuesType>('values', values) ? (error ? countMessage : count) : countMessage
    const errorClassName = error ? 'error' : ''
    const inputErrorClassName = error ? 'error-input' : max === start ? 'error-input' : 'input'

    return (
        <div className={'head-container'}>
            <div className={'container'}>
                <label>Set max: <input className={inputErrorClassName} onChange={onMaxInputChange} value={max} type='number'/></label>
                <label>Set min: <input className={inputErrorClassName} onChange={onStartInputChange} value={start} type='number'/></label>
                <div className={'button-container'}>
                    <button
                        disabled={error ? true : max === start}
                        className={'button'}
                        onClick={setCurrentStorage}>set
                    </button>
                </div>
            </div>
            <div className={'container'}>
                <span className={errorClassName}>{output}</span>
                <span>Current setup: <br/>
                    max - {values.max}, start - {values.start}</span>
                <div className={'button-container'}>
                    <button
                        disabled={count === values.max ? true : error}
                        className={'button'}
                        onClick={setCurrentCount}>count
                    </button>
                    <button
                        disabled={count === values.start ? true : error}
                        className={'button'}
                        onClick={resetCurrentCount}>reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
