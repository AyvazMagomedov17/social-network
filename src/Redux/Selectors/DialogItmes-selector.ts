//@ts-ignore
import { stateType } from './../Redux-store';


export const getDialogDataStateSelector = (state: stateType) => {
    return state.messagesPage.dialogData
}
export const getDialogListSelector = (state: stateType) => {
    return state.messagesPage.dialogList
}
