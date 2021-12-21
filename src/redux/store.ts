import {combineReducers, createStore} from 'redux';
import {stateReducer} from './store-reducer';


const reducers = combineReducers({
    state: stateReducer
})

export type GlobalState = ReturnType<typeof reducers>

export const store = createStore(reducers)


//@ts-ignore
window.store = store.getState()
