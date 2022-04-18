import { stateType } from './Redux-store';
import { ProfilePhotosType } from './../Types/types';
import { ProfileType } from '../Types/types';
import { authApi, profileApi, securityApi } from "../Api/api"
import { ThunkAction } from 'redux-thunk';


const SET_USER_DATA = 'auth/SET-USER-DATA'
const ERROR_MESSAGE = 'auth/ERROR-MESSAGE'
const SET_AUTH_PROFILE = 'auth/SET-AUTH-PROFILE'
const DELETE_AUTH_PROFILE = 'auth/DELETE-AUTH-PROFILE'
const SAVE_PHOTO_SUCCES = '/auth/SAVE-PHOTO-SUCCES'
const SET_CAPTCHA_URL = '/auth/SET-CAPTCHA-URL'


//Тип ACTION
type errorMessageACType = {
    type: typeof ERROR_MESSAGE,
    errorMessage: null | string
}
type SavePhotoToAuthSuccesACType = {
    type: typeof SAVE_PHOTO_SUCCES,
    photos: ProfilePhotosType
}
type setAuthUserDataACType = {
    type: typeof SET_USER_DATA,
    data: {
        id: number | null,
        email: string | null
        login: string | null
    },
    isAuth: boolean
}
type setAuthProfileACType = {
    type: typeof SET_AUTH_PROFILE,
    profile: ProfileType
}
type deleteAuthProfileACType = {
    type: typeof DELETE_AUTH_PROFILE
}
type setCaptchaUrlACType = {
    type: typeof SET_CAPTCHA_URL
    captcha: string
}
type ActionTypes = errorMessageACType | SavePhotoToAuthSuccesACType | setAuthUserDataACType | setAuthProfileACType | deleteAuthProfileACType | setCaptchaUrlACType
type ThunkType = ThunkAction<Promise<void>, stateType, unknown, ActionTypes>


//Тип InitialState
export type AuthReducerInitialStateType = typeof initialState

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    errorMessage: null as string | null,
    authProfile: null as ProfileType | null,
    captchaUrl: null as string | null,
}


let authReducer = (state: AuthReducerInitialStateType = initialState, action: ActionTypes): AuthReducerInitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data, isAuth: action.isAuth, errorMessage: '', captchaUrl: null }
        case ERROR_MESSAGE:
            return { ...state, errorMessage: action.errorMessage }
        case SET_AUTH_PROFILE:
            return { ...state, authProfile: action.profile }
        case DELETE_AUTH_PROFILE:
            return { ...state, authProfile: null }
        case SAVE_PHOTO_SUCCES:
            return { ...state, authProfile: { ...state.authProfile, photos: action.photos } }
        case SET_CAPTCHA_URL:
            return { ...state, captchaUrl: action.captcha }
        default:
            return state
    }
}

const errorMessageAc = (errorMessage: string | null = null): errorMessageACType => ({
    type: ERROR_MESSAGE,
    errorMessage
})
export const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean):
    setAuthUserDataACType => {

    return {
        type: SET_USER_DATA,
        data: { id, email, login },
        isAuth
    }
}
export const SavePhotoToAuthSuccesAC = (photos: ProfilePhotosType): SavePhotoToAuthSuccesACType => ({
    type: SAVE_PHOTO_SUCCES,
    photos
})
export const setAuthProfileAC = (profile: ProfileType): setAuthProfileACType => ({
    type: SET_AUTH_PROFILE,
    profile
})
export const deleteAuthProfileAC = (): deleteAuthProfileACType => ({
    type: DELETE_AUTH_PROFILE
})


export const setCaptchaUrlAC = (captcha: string): setCaptchaUrlACType => ({ type: SET_CAPTCHA_URL, captcha })

export const getLoginThunk = (): ThunkType => {
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

export const getAuthProfileThunk = (userId: number): ThunkAction<Promise<ActionTypes>, stateType, unknown, ActionTypes> => {
    return async (dispatch) => {
        let data = await profileApi.getProfileAPI(userId)

        return dispatch(setAuthProfileAC(data))
    }
}

export const loginThunk = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {

    return async (dispatch) => {
        let data = await authApi.loginAPI(email, password, rememberMe, captcha)
        if (data.resultCode === 0) {
            dispatch(getLoginThunk())
        }
        if (data.resultCode === 10) {
            dispatch(getCapthaThunk())
            dispatch(errorMessageAc(data.messages[0]))
        } else {
            dispatch(errorMessageAc(data.messages[0]))
        }

    }
}

export const logoutThunk = (): ThunkType => {
    return async (dispatch) => {
        let data = await authApi.logoutAPI()
        if (data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false))
            dispatch(deleteAuthProfileAC())
        }
    }
}
export const getCapthaThunk = (): ThunkType => async (dispatch) => {
    const response = await securityApi.getCaptchaAPI()
    const captchaUrl: string = response.data.url
    dispatch(setCaptchaUrlAC(captchaUrl))
}
export default authReducer