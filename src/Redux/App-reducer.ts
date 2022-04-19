import { InferActionsTypes } from './Redux-store';

//@ts-nocheck
import { ThunkAction } from 'redux-thunk';
import { getAuthProfileThunk, getLoginThunk } from './Auth-reducer';
import { stateType } from './Redux-store';
import { BaseThunkType } from '../Types/types';


const INITIALIZED_SUCCES = 'app/INITIALIZED-SUCCES'


export type AppReducerInitialStateType = {
    initialized: boolean
}

type ActionTypes = InferActionsTypes<typeof AppActions>
type ThunkType = BaseThunkType<ActionTypes>

type initialStateType = {
    initialized: boolean
}
let initialState: initialStateType = {
    initialized: false
}



const appReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCES:
            return { ...state, initialized: true }
        default:
            return state
    }
}
export const AppActions = {
    initializedSuccesAC: () => ({ type: INITIALIZED_SUCCES } as const)
}


export const initializeAppThunk = (id: number): ThunkType => (dispatch, getState) => {

    let promise = dispatch(getLoginThunk())
    return promise.then(() => {
        dispatch(AppActions.initializedSuccesAC())
        dispatch(getAuthProfileThunk(id))
    })

}


export default appReducer