import { BaseThunkType } from './../Types/types';
import { stateType, InferActionsTypes } from './Redux-store';
import { ThunkAction } from 'redux-thunk';
//@ts-ignore
import { AuthActions, getAuthProfileThunk } from './Auth-reducer.ts';
import { ProfileType, ProfilePhotosType, ActualStringType, ResultCodeEnum } from '../Types/types';
//@ts-ignore
import PostImg from '../Assets/img/Profile/user2.jpg'
//@ts-ignore
import newPostImg from '../Assets/img/Profile/user1.jpg'
//@ts-ignore
import { profileApi } from '../Api/api'

const ADD__POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
const SET_ACTUAL_URL = 'profile/SET-ACTUAL-URL'
const SET_STATUS = 'profile/SET-STATUS'

const TOGGLE_GET_PROFILE = 'profile/TOGGLE-GET-PROFILE'
const SAVE_PHOTO_SUCCES = '/profile/SAVE-PHOTO-SUCCES'
const UPDATE_PROFILE_ERROR_MESSAGE = '/profile/UPDATE-PROFILE-ERROR-MESSAGE'

//Типы ACTION

type ActionTypes = InferActionsTypes<typeof profileActions>
type ThunkType = BaseThunkType<ActionTypes>
// Типы для initialState
type postDataType = {
    id: number
    name: string
    follow: string
    like: number
    dislike: number
    img: any
    text: string
}






let initialState = {
    postData: [
        {
            id: 0,
            name: 'Sarah Chruz',
            follow: 'following',
            like: 5,
            dislike: 10,
            img: PostImg,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt'
        },
        {
            id: 1,
            name: 'Illon Mask',
            follow: 'unfollowing',
            like: 30,
            dislike: 1,
            img: PostImg,
            text: 'Как у тебя дела?'
        }
    ] as Array<postDataType>,
    actualString: {} as ActualStringType,
    profile: null as ProfileType | null,
    addPostImg: newPostImg as any,
    status: null as string | null,
    isgetProfile: false as boolean,
    updateProfileErrorMessage: null as Array<string> | null
}
export type ProfileReducerinitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionTypes): ProfileReducerinitialStateType => {
    switch (action.type) {
        case ADD__POST:

            if (action.text != '') {

                let newPost = {
                    id: 2,
                    name: 'ayvaz',
                    follow: 'unfollowing',
                    like: 0, dislike: 0,
                    img: newPostImg,
                    text: action.text
                }
                return {
                    ...state,
                    postData: [newPost, ...state.postData]
                }
            }
            return state
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_ACTUAL_URL:
            return { ...state, actualString: action.actualString }
        case SET_STATUS:
            return { ...state, status: action.status }
        case TOGGLE_GET_PROFILE:
            return { ...state, isgetProfile: action.isgetProfile }
        case SAVE_PHOTO_SUCCES:
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        case UPDATE_PROFILE_ERROR_MESSAGE:
            return { ...state, updateProfileErrorMessage: action.error }

        default:
            return state
    }

}

export const profileActions = {
    addPostAC: (text: string) => ({
        type: ADD__POST,
        text: text
    } as const),

    setUserProfileAC: (profile: ProfileType) => ({
        type: SET_USER_PROFILE,
        profile: profile
    } as const),
    setActualStringAC: (actualString: any) => ({
        type: SET_ACTUAL_URL,
        actualString
    } as const),
    setStatusAc: (status: string) => ({
        type: SET_STATUS,
        status
    } as const),

    updateProfileErrorMessageAC: (error: Array<string> | null) => ({
        type: UPDATE_PROFILE_ERROR_MESSAGE,
        error
    } as const),
    SavePhotoSuccesAC: (photos: ProfilePhotosType) => ({
        type: SAVE_PHOTO_SUCCES,
        photos
    } as const),
    toggleGetProfileAC: (isgetProfile: boolean) => ({ type: TOGGLE_GET_PROFILE, isgetProfile } as const)
}


export const getProfileThunk = (userId: number | null): ThunkType => {
    return async (dispatch) => {
        dispatch(profileActions.toggleGetProfileAC(true))
        let data = await profileApi.getProfileAPI(userId)
        dispatch(profileActions.setUserProfileAC(data))
        dispatch(profileActions.toggleGetProfileAC(false))


    }
}
export const getStatusThunk = (userId: number): ThunkType => {
    return async (dispatch) => {
        let data = await profileApi.getStatusAPI(userId)
        dispatch(profileActions.setStatusAc(data))

    }
}

export const updateStatusThunk = (status: string): ThunkType => {
    return async (dispatch) => {
        try {
            let data = await profileApi.updateStatusApi(status)
            if (data.resultCode === ResultCodeEnum.Succes) {
                dispatch(profileActions.setStatusAc(status))
            }
        } catch (error: any) {               // сработает если промис отклонится. Аналоги Promis.reject

            alert(`${error.message}.
             Не удалось обновить статус, скорее всего проблема в токене`)

        }

    }
}

export const savePhotoThunk = (file: ProfilePhotosType): ThunkType => {
    return async (dispatch) => {
        let data = await profileApi.savePhotoApi(file)

        if (data.resultCode === ResultCodeEnum.Succes) {

            dispatch(profileActions.SavePhotoSuccesAC(data.data.photos))
            dispatch(AuthActions.SavePhotoToAuthSuccesAC(data.data.photos))
        }

    }
}

export const updateProfileThunk = (profile: ProfileType): ThunkType => {

    return async (dispatch, getState) => {
        let userId = getState().auth.id
        let data = await profileApi.updateProfileInfoApi(profile)
        if (data.resultCode === ResultCodeEnum.Succes) {
            dispatch(getProfileThunk(userId))
            dispatch(getAuthProfileThunk(userId))
            dispatch(profileActions.updateProfileErrorMessageAC(null))
        } else {
            dispatch(profileActions.updateProfileErrorMessageAC(data.messages))
            return Promise.reject(data.messages)
        }
    }
}

export default profileReducer;