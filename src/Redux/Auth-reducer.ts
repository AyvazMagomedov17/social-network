
import { stateType, InferActionsTypes } from './Redux-store';
import { ProfilePhotosType, ResultCodeEnum, ResultCodeForCaptchaEnum, BaseThunkType } from './../Types/types';
import { ProfileType } from '../Types/types';
import { authApi, profileApi, securityApi } from "../Api/api"



const SET_USER_DATA = 'auth/SET-USER-DATA'
const ERROR_MESSAGE = 'auth/ERROR-MESSAGE'
const SET_AUTH_PROFILE = 'auth/SET-AUTH-PROFILE'
const DELETE_AUTH_PROFILE = 'auth/DELETE-AUTH-PROFILE'
const SAVE_PHOTO_SUCCES = '/auth/SAVE-PHOTO-SUCCES'
const SET_CAPTCHA_URL = '/auth/SET-CAPTCHA-URL'


//Тип ACTION
type ActionTypes = InferActionsTypes<typeof AuthActions>
type ThunkType = BaseThunkType<ActionTypes>


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

export const AuthActions = {
    errorMessageAc: (errorMessage: string | null = null) => ({
        type: ERROR_MESSAGE,
        errorMessage
    } as const),
    setAuthUserDataAC: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: SET_USER_DATA,
        data: { id, email, login },
        isAuth
    } as const),

    SavePhotoToAuthSuccesAC: (photos: ProfilePhotosType) => ({
        type: SAVE_PHOTO_SUCCES,
        photos
    } as const),
    setAuthProfileAC: (profile: ProfileType) => ({
        type: SET_AUTH_PROFILE,
        profile
    } as const),
    deleteAuthProfileAC: () => ({
        type: DELETE_AUTH_PROFILE
    } as const),
    setCaptchaUrlAC: (captcha: string) => ({ type: SET_CAPTCHA_URL, captcha } as const)
}





export const getLoginThunk = (): ThunkType => {
    return (dispatch) => {
        return authApi.meAPI()
            .then((data) => {
                if (data.resultCode === ResultCodeEnum.Succes) {
                    let { id, email, login } = data.data
                    dispatch(AuthActions.setAuthUserDataAC(id, email, login, true))
                }
            })

    }
}

export const getAuthProfileThunk = (userId: number): BaseThunkType<ActionTypes, Promise<ActionTypes>> => {
    return async (dispatch) => {
        let data = await profileApi.getProfileAPI(userId)

        return dispatch(AuthActions.setAuthProfileAC(data))
    }
}

export const loginThunk = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {

    return async (dispatch) => {
        let data = await authApi.loginAPI(email, password, rememberMe, captcha)
        if (data.resultCode === ResultCodeEnum.Succes) {
            dispatch(getLoginThunk())
        }
        if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIs) {
            dispatch(getCapthaThunk())
            dispatch(AuthActions.errorMessageAc(data.messages[0]))
        } else {
            dispatch(AuthActions.errorMessageAc(data.messages[0]))
        }

    }
}

export const logoutThunk = (): ThunkType => {
    return async (dispatch) => {
        let data = await authApi.logoutAPI()
        if (data.resultCode === ResultCodeEnum.Succes) {
            dispatch(AuthActions.setAuthUserDataAC(null, null, null, false))
            dispatch(AuthActions.deleteAuthProfileAC())
        }
    }
}
export const getCapthaThunk = (): ThunkType => async (dispatch) => {
    const response = await securityApi.getCaptchaAPI()
    const captchaUrl: string = response.data.url
    dispatch(AuthActions.setCaptchaUrlAC(captchaUrl))

}
export default authReducer