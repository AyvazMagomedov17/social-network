//@ts-ignore
import { stateType } from './../Redux-store.ts';


export const getDialogDataStateSelector = (state: stateType) => {
    return state.messagesPage.dialogData
}
