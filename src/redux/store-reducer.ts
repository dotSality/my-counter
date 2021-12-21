export enum ACTION_TYPES {
    SET_VALUES_AT = 'SET-VALUES-AT',
    SET_ERROR_AT = 'SET-ERROR-AT',
    SET_COUNT_AT = 'SET-COUNT-AT',
    SET_MAX = 'SET-MAX',
    SET_START = 'SET-START',
    SET_INITIAL_STATE = 'SET-INITIAL-STATE'
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
    max: 0,
    start: 0,
    count: 0,
    countMessage: '',
    error: true,
}

type InitialStateType = typeof initialState

export const stateReducer = (state = initialState, action: CommonActionType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPES.SET_VALUES_AT:
        case ACTION_TYPES.SET_ERROR_AT:
        case ACTION_TYPES.SET_COUNT_AT:
        case ACTION_TYPES.SET_MAX:
        case ACTION_TYPES.SET_START:
        case ACTION_TYPES.SET_INITIAL_STATE:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export type CommonActionType = ReturnType<typeof setErrorState>
    | ReturnType<typeof setCount>
    | ReturnType<typeof setValues>
    | ReturnType<typeof setMax>
    | ReturnType<typeof setStart>
    | ReturnType<typeof setInitialState>

export const setErrorState = (error: boolean, countMessage: string) => ({type: ACTION_TYPES.SET_ERROR_AT, payload: {error, countMessage}} as const)
export const setCount = (count: number) => ({type: ACTION_TYPES.SET_COUNT_AT, payload: {count}} as const)
export const setValues = (values: ValuesType) => ({type: ACTION_TYPES.SET_VALUES_AT, payload: {values}} as const)
export const setMax = (max: number) => ({type: ACTION_TYPES.SET_MAX, payload: {max}} as const)
export const setStart = (start: number) => ({type: ACTION_TYPES.SET_START, payload: {start}} as const)
export const setInitialState = (values: ValuesType, max: number, start: number, count: number) => ({type: ACTION_TYPES.SET_INITIAL_STATE, payload: {values, max, start, count}} as const)