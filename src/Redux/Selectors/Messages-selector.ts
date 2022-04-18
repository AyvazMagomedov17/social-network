//@ts-ignore
import { stateType } from './../Redux-store.ts';
export const getMyMessageInfoDataSelector = (state: stateType) => {
    return state.messagesPage.myMessageInfo
}
export const getYourMessageInfoDataSelector = (state: stateType) => {
    return state.messagesPage.yourMessageInfo
}
export const getOneMessageDataSelector = (state: stateType) => {
    return state.messagesPage.MessageData
}
