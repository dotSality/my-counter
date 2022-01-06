import {combineReducers, createStore} from 'redux';
import {firstReducer} from './first-reducer';
import {secondReducer} from './second-reducer';


const reducers = combineReducers({
    first: firstReducer,
    second: secondReducer,
})

export type GlobalState = ReturnType<typeof reducers>

export const store = createStore(reducers)


//@ts-ignore
window.store = store.getState()
