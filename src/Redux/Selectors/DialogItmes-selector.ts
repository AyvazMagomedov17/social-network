//@ts-ignore
import { stateType } from './../Redux-store';


export const getDialogListSelector = (state: stateType) => {
    return state.messagesPage.dialogList
}
