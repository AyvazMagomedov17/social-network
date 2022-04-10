import { number, object } from "yup"


const ADD__MESSAGE = 'messages/ADD-MESSAGE'
type MessageInfoType = {
    id: number
    name: string
    time: string
}
type MessageDataType = {
    id: number
    from: string
    message: string

}
type dialogDataType = {
    id: number
    name: string
}
type initialStateType = typeof initialState

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

const messagesReducer = (state = initialState, action: any): initialStateType => {

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
        default:
            return state
    }
}

type addMessageACType = {
    type: typeof ADD__MESSAGE
    message: string
}
export const addMessageAC = (message): addMessageACType => ({
    type: ADD__MESSAGE,
    message
})




export default messagesReducer;