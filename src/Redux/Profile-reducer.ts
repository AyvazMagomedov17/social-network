import { SavePhotoToAuthSuccesAC, getAuthProfileThunk } from './Auth-reducer.ts';
import { ProfileType, ProfilePhotosType } from '../Types/types';

import PostImg from '../Assets/img/Profile/user2.jpg'
import newPostImg from '../Assets/img/Profile/user1.jpg'
import { profileApi } from '../Api/api'

const ADD__POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
const SET_ACTUAL_URL = 'profile/SET-ACTUAL-URL'
const SET_STATUS = 'profile/SET-STATUS'

const TOGGLE_GET_PROFILE = 'profile/TOGGLE-GET-PROFILE'
const SAVE_PHOTO_SUCCES = '/profile/SAVE-PHOTO-SUCCES'
const UPDATE_PROFILE_ERROR_MESSAGE = '/profile/UPDATE-PROFILE-ERROR-MESSAGE'

//Типы ACTION
type addPostACType = {
    type: typeof ADD__POST,
    text: string
}
type setUserProfileACType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
type setActualStringACType = {
    type: typeof SET_ACTUAL_URL
    actualString: ActualStringType
}
type setStatusAcType = {
    type: typeof SET_STATUS
    status: string
}
type updateProfileErrorMessageACType = {
    type: typeof UPDATE_PROFILE_ERROR_MESSAGE
    error: string
}
type SavePhotoSuccesACType = {
    type: typeof SAVE_PHOTO_SUCCES
    photos: ProfilePhotosType
}
type toggleGetProfileACType = {
    type: typeof TOGGLE_GET_PROFILE,
    isgetProfile: boolean
}
type ActualStringType = {
    '*': string
}
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
type initialStateType = typeof initialState





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
    actualString: { '*': '' } as ActualStringType,
    profile: null as ProfileType | null,
    addPostImg: newPostImg as any,
    status: null as string | null,
    isgetProfile: false as boolean,
    updateProfileErrorMessage: null as string | null
}

const profileReducer = (state = initialState, action: any): initialStateType => {
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
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_ACTUAL_URL:

            return { ...state, actualString: action.actualString }

        case SET_STATUS:
            return { ...state, status: action.status }
        case TOGGLE_GET_PROFILE:
            return { ...state, isgetProfile: action.isgetProfile }

        case SAVE_PHOTO_SUCCES:
            console.log(action.photos)
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        case UPDATE_PROFILE_ERROR_MESSAGE:
            return { ...state, updateProfileErrorMessage: action.error }

        default:
            return state
    }

}

export const addPostAC = (text: string): addPostACType => ({
    type: ADD__POST,
    text: text
})

export const setUserProfileAC = (profile: ProfileType): setUserProfileACType => ({
    type: SET_USER_PROFILE,
    profile: profile
})

export const setActualStringAC = (actualString: ActualStringType): setActualStringACType => ({
    type: SET_ACTUAL_URL,
    actualString
})

const setStatusAc = (status: string): setStatusAcType => ({
    type: SET_STATUS,
    status
})



export const updateProfileErrorMessageAC = (error: string): updateProfileErrorMessageACType => ({
    type: UPDATE_PROFILE_ERROR_MESSAGE,
    error
})

const SavePhotoSuccesAC = (photos: ProfilePhotosType): SavePhotoSuccesACType => ({
    type: SAVE_PHOTO_SUCCES,
    photos
})



const toggleGetProfileAC = (isgetProfile: boolean): toggleGetProfileACType => ({ type: TOGGLE_GET_PROFILE, isgetProfile })


export const getProfileThunk = (userId) => {
    return async (dispatch) => {
        dispatch(toggleGetProfileAC(true))
        let data = await profileApi.getProfileAPI(userId)
        dispatch(setUserProfileAC(data))
        dispatch(toggleGetProfileAC(false))


    }
}
export const getStatusThunk = (userId) => {
    return async (dispatch) => {
        let data = await profileApi.getStatusAPI(userId)
        dispatch(setStatusAc(data))

    }
}

export const updateStatusThunk = (status) => {
    return async (dispatch) => {
        try {
            let data = await profileApi.updateStatusApi(status)
            if (data.resultCode === 0) {
                dispatch(setStatusAc(status))
            }
        } catch (error) {               // сработает если промис отклонится. Аналоги Promis.reject

            alert(`${error.message}.
             Не удалось обновить статус, скорее всего проблема в токене`)

        }

    }
}

export const savePhotoThunk = (file) => {
    return async (dispatch) => {
        let data = await profileApi.savePhotoApi(file)

        if (data.resultCode === 0) {

            dispatch(SavePhotoSuccesAC(data.data.photos))
            dispatch(SavePhotoToAuthSuccesAC(data.data.photos))
        }

    }
}

export const updateProfileThunk = (profile) => {

    return async (dispatch, getState) => {
        let userId = getState().auth.id
        let data = await profileApi.updateProfileInfoApi(profile)
        if (data.resultCode === 0) {
            dispatch(getProfileThunk(userId))
            dispatch(getAuthProfileThunk(userId))
            dispatch(updateProfileErrorMessageAC(null))
        } else {
            dispatch(updateProfileErrorMessageAC(data.messages))
            return Promise.reject(data.messages)
        }
    }
}

export default profileReducer;