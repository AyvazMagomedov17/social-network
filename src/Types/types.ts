import { stateType } from './../Redux/Redux-store';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
export type ProfilePhotosType = {
    large: string | null
    small: string | null
}
export type ProfileContactsType = {
    facebook: string | null
    vk: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
export type ProfileType = {
    aboutMe?: string | null | undefined
    fullName?: string | undefined
    lookingForAJob?: boolean | undefined
    lookingForAJobDescription?: string | null | undefined
    userId?: number | undefined
    contacts?: ProfileContactsType | undefined
    photos?: ProfilePhotosType | undefined
}
export type ActualStringType = {
    '*': number
}

///
export type UsersDataType = {
    followed: boolean
    id: number
    name: string
    photos: ProfilePhotosType
    status: null | string
    uniqueUrlName: null | string

}

///
export type dialogDataType = {
    id: number
    name: string
}

export type MessageInfoType = {
    id: number
    name: string
    time: string
}
export type MessageDataType = {
    id: number
    from: string
    message: string

}



////
export enum ResultCodeEnum {
    Succes = 0,
    Error = 1,
}
export enum ResultCodeForCaptchaEnum {
    CaptchaIs = 10
}

///
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, stateType, unknown, A>