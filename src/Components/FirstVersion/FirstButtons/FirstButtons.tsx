import s from '../First.module.css'
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {CommonActionType, setCount, ValuesType} from '../../../redux/first-reducer';
import {initStateFirst} from '../../../redux/selectors';
import {restoreState} from '../../../LocalStorageFunctions/storage';

export const FirstButtons = () => {

    const dispatch = useDispatch<Dispatch<CommonActionType>>()

    const {
        values,
        count,
        error,
    } = useSelector(initStateFirst)

    const setCurrentCount = () => dispatch(setCount(count + 1))

    const resetCurrentCount = () => {
        let state = restoreState<ValuesType>('first-values', values)
        if (state) dispatch(setCount(state.start))
    }

    return (
        <div className={s.buttonContainer}>
            <button
                disabled={count === values.max ? true : error}
                className={s.button}
                onClick={setCurrentCount}>Count
            </button>
            <button
                disabled={count === values.start ? true : error}
                className={s.button}
                onClick={resetCurrentCount}>Reset
            </button>
        </div>
    )
}