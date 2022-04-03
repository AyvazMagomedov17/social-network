

const ADD__MESSAGE = 'messages/ADD-MESSAGE'
const CHANGE__MESSAGE = 'messages/CHANGE-MESSAGE'
let initialState = {
    myMessageInfo: {
        id: 'me',
        name: 'Айваз',
        time: "10:00"
    },
    yourMessageInfo: {
        id: 'you',
        name: 'Марат',
        time: ""
    },
    MessageData: [
        { id: 0, from: 'me', message: 'Привет, подруга' },
        { id: 1, from: 'you', message: 'Как ты?' },
        { id: 1, from: 'you', message: 'Что делаешь?' },
        { id: 0, from: 'me', message: 'Блин, я гений' },
        { id: 1, from: 'me', message: 'враг впереди' },
        { id: 1, from: 'you', message: 'враг впереди' },




    ],
    dialogData: [
        { id: 1, name: 'Lindsi Lohan' },
        { id: 2, name: 'Sharon Tayt' },
        { id: 3, name: 'Scarlet Johannson' },
        { id: 4, name: 'Uma Turman' },
        { id: 5, name: 'Margo Robbie' },
    ],

}

const messagesReducer = (state = initialState, action) => {

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

export const addMessageAC = (message) => {
    return {
        type: ADD__MESSAGE,
        message
    }
}


export default messagesReducer;