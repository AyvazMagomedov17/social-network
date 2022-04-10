export const getProfileSelector = (state) => {
    return state.profilePage.profile
}
export const getActualStringSelector = (state) => {
    return state.profilePage.actualString
}

export const getUserIdSelector = (state) => {
    return state.auth.id
}
export const getUpdateProfileErrorMessageSelector = (state) => {
    return state.profilePage.updateProfileErrorMessage
}
export const getIsgetProfileSelector = (state) => {
    return state.profilePage.isgetProfile
}