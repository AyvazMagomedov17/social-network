//@ts-ignore
import { stateType } from './../Redux-store.ts';
import { createSelector } from "reselect"

export const getIsAuthSelector = (state: stateType) => {
    return state.auth.isAuth
}
export const getErrorMessageSelector = (state: stateType) => {
    return state.auth.errorMessage
}
export const getCaptchaUrlSelector = (state: stateType) => {
    return state.auth.captchaUrl
}

export const getChotoSuperSelector = createSelector(getIsAuthSelector, (isAuth) => {
    return isAuth
})