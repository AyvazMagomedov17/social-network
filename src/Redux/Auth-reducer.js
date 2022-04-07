import { authApi, profileApi } from "../Api/api"


const SET_USER_DATA = 'auth/SET-USER-DATA'
const ERROR_MESSAGE = 'auth/ERROR-MESSAGE'
const SET_AUTH_PROFILE = 'auth/SET-AUTH-PROFILE'
const DELETE_AUTH_PROFILE = 'auth/DELETE-AUTH-PROFILE'
const SAVE_PHOTO_SUCCES = '/auth/SAVE-PHOTO-SUCCES'
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    errorMessage: null,
    authProfile: null
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data, isAuth: action.isAuth, errorMessage: '' }
        case ERROR_MESSAGE:
            return { ...state, errorMessage: action.errorMessage }
        case SET_AUTH_PROFILE:
            return { ...state, authProfile: action.profile }
        case DELETE_AUTH_PROFILE:
            return { ...state, authProfile: null }
        case SAVE_PHOTO_SUCCES:
            return { ...state, authProfile: { ...state.authProfile, photos: action.photos } }
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
export const setAuthProfileAC = (profile) => {
    return {
        type: SET_AUTH_PROFILE,
        profile
    }
}
export const deleteAuthProfileAC = () => {
    return {
        type: DELETE_AUTH_PROFILE,

    }
}
export const SavePhotoToAuthSuccesAC = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCES,
        photos
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

export const getAuthProfileThunk = (userId) => {
    return async (dispatch) => {
        let data = await profileApi.getProfileAPI(userId)
        return dispatch(setAuthProfileAC(data))
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
            dispatch(deleteAuthProfileAC())
        }
    }
}
export default authReducer