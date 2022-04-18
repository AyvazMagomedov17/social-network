//@ts-ignore
import { stateType } from './../Redux-store.ts';

export const getProfileSelector = (state: stateType) => {
    return state.profilePage.profile
}
export const getActualStringSelector = (state: stateType) => {
    return state.profilePage.actualString
}

export const getUserIdSelector = (state: stateType) => {
    return state.auth.id
}
export const getUpdateProfileErrorMessageSelector = (state: stateType) => {
    return state.profilePage.updateProfileErrorMessage
}
export const getIsgetProfileSelector = (state: stateType) => {
    return state.profilePage.isgetProfile
}