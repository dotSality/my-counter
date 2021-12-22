import s from './../Second.module.css'
import {CommonActionType, setCount, ValuesType} from '../../../redux/store-reducer';
import {restoreState} from '../../../LocalStorageFunctions/storage';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {initState} from '../../../redux/selectors';
import React from 'react';

type ButtonContainerPropsType = {
    settings: boolean
    toggleSettings: () => void
}

export const SecondButtons = (props: ButtonContainerPropsType) => {

    const dispatch = useDispatch<Dispatch<CommonActionType>>()

    const {
        values,
        count,
        error,
    } = useSelector(initState)

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
            <button
                className={s.button}
                onClick={props.toggleSettings}>
                {props.settings ? 'Count' : 'Settings'}</button>
        </div>
    )
}