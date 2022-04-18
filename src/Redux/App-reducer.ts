//@ts-nocheck
import { ThunkAction } from 'redux-thunk';
import { getAuthProfileThunk, getLoginThunk } from './Auth-reducer.ts';
import { stateType } from './Redux-store';


const INITIALIZED_SUCCES = 'app/INITIALIZED-SUCCES'


export type AppReducerInitialStateType = {
    initialized: boolean
}
type initializedSuccesACType = {
    type: typeof INITIALIZED_SUCCES
}
type ActionTypes = initializedSuccesACType
type ThunkType = ThunkAction<Promise<void>, stateType, unknown, ActionTypes>


let initialState: initialStateType = {
    initialized: false
}



const appReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCES:
            return { ...state, initialized: true }
        default:
            return state
    }
}

export const initializedSuccesAC = (): initializedSuccesACType => ({ type: INITIALIZED_SUCCES })

export const initializeAppThunk = (id: number): ThunkType => (dispatch, getState) => {

    let promise = dispatch(getLoginThunk())
    return promise.then(() => {
        dispatch(initializedSuccesAC())
        dispatch(getAuthProfileThunk(id))
    })

}


export default appReducer