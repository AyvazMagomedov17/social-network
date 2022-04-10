import { getAuthProfileThunk, getLoginThunk } from './Auth-reducer.ts';


const INITIALIZED_SUCCES = 'app/INITIALIZED-SUCCES'

type initialStateType = {
    initialized: boolean
}
type initializedSuccesACType = {
    type: typeof INITIALIZED_SUCCES
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

export const initializedSuccesAC = (): initializedSuccesACType => ({ type: INITIALIZED_SUCCES })

export const initializeAppThunk = (id) => (dispatch) => {
    let promise = dispatch(getLoginThunk())
    return promise.then(() => {
        dispatch(initializedSuccesAC())
        dispatch(getAuthProfileThunk(id))
    })

}


export default appReducer