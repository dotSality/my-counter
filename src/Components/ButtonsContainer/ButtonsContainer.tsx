import s from './../../common/Common.module.css'
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {CommonActionType, setCount, ValuesType} from '../../redux/store-reducer';
import {initState} from '../../redux/selectors';
import {restoreState} from '../../LocalStorageFunctions/storage';

export const ButtonsContainer = () => {

    const dispatch = useDispatch<Dispatch<CommonActionType>>()

    const {
        values,
        count,
        error,
    } = useSelector(initState)

    const setCurrentCount = () => dispatch(setCount(count + 1))

    const resetCurrentCount = () => {
        let state = restoreState<ValuesType>('values', values)
        if (state) dispatch(setCount(state.start))
    }

    return (
        <div className={s.buttonContainer}>
            <button
                disabled={count === values.max ? true : error}
                className={s.button}
                onClick={setCurrentCount}>count
            </button>
            <button
                disabled={count === values.start ? true : error}
                className={s.button}
                onClick={resetCurrentCount}>reset
            </button>
        </div>
    )
}