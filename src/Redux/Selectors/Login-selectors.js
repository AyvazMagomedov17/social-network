import { createSelector } from "reselect"

export const getIsAuthSelector = (state) => {
    return state.auth.isAuth
}
export const getErrorMessageSelector = (state) => {
    return state.auth.errorMessage
}
export const getCaptchaUrlSelector = (state) => {
    return state.auth.captchaUrl
}

export const getChotoSuperSelector = createSelector(getIsAuthSelector, (isAuth) => {
    return isAuth
})