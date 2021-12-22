import {useSelector} from 'react-redux';
import {initState} from '../../../redux/selectors';
import {restoreState} from '../../../LocalStorageFunctions/storage';
import {ValuesType} from '../../../redux/store-reducer';
import s from './../Second.module.css';
import React from 'react';

export const SecondCount = () => {

    const {
        max,
        values,
        count,
        countMessage,
        error,
    } = useSelector(initState)

    const output = restoreState<ValuesType>('second-values', values) ? (error ? countMessage : count) : countMessage
    const errorClassName = error ? s.error : count === max ? s.error : ''

    return (
        <div className={s.count}>
            <span className={errorClassName}>{output}</span>
            <span>Current setup: <br/>
                    max - {values.max}, start - {values.start}</span>
        </div>
    )
}