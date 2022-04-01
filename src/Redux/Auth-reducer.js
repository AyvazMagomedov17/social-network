import { authApi } from "../Api/api"


const SET_USER_DATA = 'SET-USER-DATA'
const ERROR_MESSAGE = 'ERROR-MESSAGE'
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

export const getLoginThunkCreator = () => {
    return (dispatch) => {
        return authApi.me()
            .then((data) => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data
                    dispatch(setAuthUserDataAC(id, email, login, true))
                }
            })

    }
}

export const loginThunkCreator = (email, password, rememberMe) => {

    return (dispatch) => {
        authApi.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getLoginThunkCreator())
                } else {
                    dispatch(errorMessageAc(data.messages[0]))
                }
            })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        authApi.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(null, null, null, false))
                }
            })
    }
}
export default authReducer