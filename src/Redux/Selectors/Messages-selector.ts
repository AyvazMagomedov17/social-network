//@ts-ignore
import { stateType } from './../Redux-store';
export const getMyMessageInfoDataSelector = (state: stateType) => {
    return state.messagesPage.myMessageInfo
}
export const getYourMessageInfoDataSelector = (state: stateType) => {
    return state.messagesPage.yourMessageInfo
}
export const getOneMessageDataSelector = (state: stateType) => {
    return state.messagesPage.MessageData
}
export const getMessagesIsFetching = (state: stateType) => {
    return state.messagesPage.messagesIsFetching
}
export const getCountOfNewMessagesSelector = (state: stateType) => {
    return state.messagesPage.countOfNewMessages
}
export const getMessagesListSelector = (state: stateType) => {
    return state.messagesPage.messagesList
}
export const getTotalMessagesCountSelector = (state: stateType) => {
    return state.messagesPage.totalMessagesCount
}
