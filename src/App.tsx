import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {restoreState, saveState} from './LocalStorageFunctions/storage';

export type ValuesType = {
    [key: string]: number
}

function App() {
    const initialState: ValuesType = {
        max: 0,
        start: 0
    }

    const [values, setValues] = useState<ValuesType>(initialState)
    const [count, setCount] = useState<number>(0)
    const [countMsg, setCountMsg] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const [max, setMax] = useState<number>(0)
    const [start, setStart] = useState<number>(0)

    useEffect(() => {
        let state = restoreState<ValuesType>('values', values)
        if (state) {
            setError(false)
            setValues(state)
            setMax(state.max)
            setStart(state.start)
            setCount(state.start)
        } else {
            setError(true)
            setCountMsg('enter values and press "set"')
        }
    }, [])

    const onMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        restoreState<ValuesType>('values', values) ? setError(false) : setError(true)
        let value = parseInt(e.currentTarget.value)
        setMax(value)
        setCountMsg('enter values and press "set"')
        if (value < 0) {
            setError(true)
            setCountMsg('value incorrect')
        } else if (value <= start) {
            setError(true)
            setCountMsg('value incorrect')
        } else setError(false)
    }

    const onStartInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        restoreState<ValuesType>('values', values) ?  setError(true) : setError(false)
        let value = parseInt(e.currentTarget.value)
        setStart(value)
        setCountMsg('enter values and press "set"')
        if (value < 0) {
            setError(true)
            setCountMsg('value incorrect')
        } else if (value >= max) {
            setError(true)
            setCountMsg('value incorrect')
        } else setError(false)
    }

    const setCurrentStorage = () => {
        let newValues = {...values, max: max, start: start}
        setValues(newValues)
        setCount(newValues.start)
        saveState<ValuesType>('values', newValues)
    }

    const setCurrentCount = () => setCount(count + 1)
    const resetCurrentCount = () => {
        let state = restoreState<ValuesType>('values', values)
        if (state) setCount(state.start)
    }

    const output = restoreState<ValuesType>('values', values) ? (error ? countMsg : count) : countMsg

    const errorClassName = error ? 'error' : ''
    return (
        <div className={'head-container'}>
            <div className={'container'}>
                <label>Set max: <input className={errorClassName} onChange={onMaxInputChange} value={max} type='number'/></label>
                <label>Set min: <input className={errorClassName} onChange={onStartInputChange} value={start} type='number'/></label>
                <div className={'button-container'}>
                    <button
                        disabled={error}
                        className={'button'}
                        onClick={setCurrentStorage}>set
                    </button>
                </div>
            </div>
            <div className={'container'}>
                <span className={errorClassName}>{output}</span>
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
