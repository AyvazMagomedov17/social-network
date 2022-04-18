
//@ts-ignore
import { stateType } from "../Redux-store.ts";

export const getImgSelector = (state: stateType) => {
    return state.auth.authProfile.photos.small != null ? state.auth.authProfile.small : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
}

export const getAuthProfileSelecotr = (state: stateType) => {
    return state.auth.authProfile
}
export const getAuthIdSelector = (state: stateType) => {
    return state.auth.id
}
