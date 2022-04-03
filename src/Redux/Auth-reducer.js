import { authApi } from "../Api/api"


const SET_USER_DATA = 'auth/SET-USER-DATA'
const ERROR_MESSAGE = 'auth/ERROR-MESSAGE'
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    errorMessage: null
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data, isAuth: action.isAuth, errorMessage: '' }
        case ERROR_MESSAGE:
            return { ...state, errorMessage: action.errorMessage }

        default:
            return state
    }
}
const errorMessageAc = (errorMessage = null) => {
    return {
        type: ERROR_MESSAGE,
        errorMessage
    }
}
export const setAuthUserDataAC = (id, email, login, isAuth,) => {
    return {
        type: SET_USER_DATA,
        data: { id, email, login },
        isAuth: isAuth
    }
}

export const getLoginThunk = () => {
    return (dispatch) => {
        return authApi.meAPI()
            .then((data) => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data
                    dispatch(setAuthUserDataAC(id, email, login, true))
                }
            })

    }
}

export const loginThunk = (email, password, rememberMe) => {

    return async (dispatch) => {
        let data = await authApi.loginAPI(email, password, rememberMe)
        if (data.resultCode === 0) {
            dispatch(getLoginThunk())
        } else {
            dispatch(errorMessageAc(data.messages[0]))
        }

    }
}

export const logoutThunk = () => {
    return async (dispatch) => {
        let data = await authApi.logoutAPI()
        if (data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false))
        }
    }
}
export default authReducer