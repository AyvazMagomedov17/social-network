import { getLoginThunk } from "./Auth-reducer"

const INITIALIZED_SUCCES = 'app/INITIALIZED-SUCCES'

let initialState = {
    initialized: false
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCES:
            return { ...state, initialized: true }
        default:
            return state
    }
}

export const initializedSuccesAC = () => ({ type: INITIALIZED_SUCCES })

export const initializeAppThunk = () => (dispatch) => {
    let promise = dispatch(getLoginThunk())


    promise.then(() => {
        dispatch(initializedSuccesAC())
    })

}


export default appReducer