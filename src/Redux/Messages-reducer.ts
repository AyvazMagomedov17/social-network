import { InferActionsTypes } from './Redux-store';
import { MessageDataType, MessageInfoType } from './../Types/types';
import { dialogDataType } from "../Types/types"

const ADD__MESSAGE = 'messages/ADD-MESSAGE'

//ACTION-TYPES 
export type addMessageACType = {
    type: typeof ADD__MESSAGE
    message: string
}
type ActionTypes = InferActionsTypes<typeof MessagesActions>

//STATE TYPE
export type initialStateMessagesType = typeof initialState

let initialState = {
    myMessageInfo: {
        id: 1,
        name: 'Айваз',
        time: "10:00"
    } as MessageInfoType,
    yourMessageInfo: {
        id: 2,
        name: 'Марат',
        time: '12: 00'
    } as MessageInfoType,
    MessageData: [
        { id: 0, from: 'me', message: 'Привет, подруга' },
        { id: 1, from: 'you', message: 'Как ты?' },
        { id: 1, from: 'you', message: 'Что делаешь?' },
        { id: 0, from: 'me', message: 'Блин, я гений' },
        { id: 1, from: 'me', message: 'враг впереди' },
        { id: 1, from: 'you', message: 'враг впереди' },
    ] as Array<MessageDataType>,
    dialogData: [
        { id: 1, name: 'Lindsi Lohan' },
        { id: 2, name: 'Sharon Tayt' },
        { id: 3, name: 'Scarlet Johannson' },
        { id: 4, name: 'Uma Turman' },
        { id: 5, name: 'Margo Robbie' },
    ] as Array<dialogDataType>,

}

const messagesReducer = (state = initialState, action: ActionTypes): initialStateMessagesType => {

    switch (action.type) {
        case ADD__MESSAGE:
            if (action.message != '') {
                let newMessage = {
                    id: 10,
                    from: 'me',
                    message: action.message
                }
                return {
                    ...state,
                    MessageData: [...state.MessageData, newMessage]
                }
            }
            return state
        default:
            return state
    }
}

export const MessagesActions = {
    addMessageAC: (message: string): addMessageACType => ({
        type: ADD__MESSAGE,
        message
    })
}





export default messagesReducer;