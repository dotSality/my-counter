import s from '../First.module.css'
import {FirstButtons} from '../FirstButtons/FirstButtons';
import React from 'react';
import {restoreState} from '../../../LocalStorageFunctions/storage';
import {ValuesType} from '../../../redux/store-reducer';
import {useSelector} from 'react-redux';
import {initState} from '../../../redux/selectors';

export const FirstCount = () => {

    const {
        max,
        values,
        count,
        countMessage,
        error,
    } = useSelector(initState)

    const output = restoreState<ValuesType>('values', values) ? (error ? countMessage : count) : countMessage
    const errorClassName = error ? s.error : count === max ? s.error : ''

    return (
        <div className={s.container}>
            <span className={errorClassName}>{output}</span>
            <span>Current setup: <br/>
                    max - {values.max}, start - {values.start}</span>
            <FirstButtons/>
        </div>
    )
}