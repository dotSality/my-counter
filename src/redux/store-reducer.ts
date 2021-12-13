export enum ACTION_TYPES {
    SET_VALUES_AT = 'SET-VALUES-AT',
    SET_ERROR_AT = 'SET-ERROR-AT',
    SET_COUNT_AT = 'SET-COUNT-AT',
    SET_COUNT_MESSAGE_AT = 'SET-COUNT-MESSAGE-AT'
}

export type ValuesType = {
    max: number,
    start: number,
}

const initialState = {
    values: {
        max: 0,
        start: 0,
    },
    count: 0,
    countMessage: '',
    error: true,
}

type InitialStateType = typeof initialState

export const stateReducer = (state = initialState, action: CommonActionType): InitialStateType => {
    debugger
    switch (action.type) {
        case ACTION_TYPES.SET_VALUES_AT:
        case ACTION_TYPES.SET_ERROR_AT:
        case ACTION_TYPES.SET_COUNT_AT:
        case ACTION_TYPES.SET_COUNT_MESSAGE_AT:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export type CommonActionType = ReturnType<typeof setError>
    | ReturnType<typeof setCount>
    | ReturnType<typeof setCountMessage>
    | ReturnType<typeof setValues>

export const setError = (error: boolean) => ({type: ACTION_TYPES.SET_ERROR_AT, payload: {error}} as const)
export const setCount = (count: number) => ({type: ACTION_TYPES.SET_COUNT_AT, payload: {count}} as const)
export const setCountMessage = (countMessage: string) => ({type: ACTION_TYPES.SET_COUNT_MESSAGE_AT, payload: {countMessage}} as const)
export const setValues = (values: ValuesType) => ({type: ACTION_TYPES.SET_VALUES_AT, payload: {values}} as const)