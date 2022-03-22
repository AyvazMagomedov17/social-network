

const ADD__MESSAGE = 'ADD-MESSAGE'
const CHANGE__MESSAGE = 'CHANGE-MESSAGE'
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
    newMessageTextarea: '',
}
window.newMessageTextarea = initialState.newMessageTextarea
const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD__MESSAGE:

            if (state.newMessageTextarea != '') {
                let newMessage = {
                    id: 10,
                    from: 'me',
                    message: state.newMessageTextarea
                }
                return {
                    ...state,
                    newMessageTextarea: '',
                    MessageData: [...state.MessageData, newMessage]
                }

            }

        case CHANGE__MESSAGE:
            return {
                ...state,
                newMessageTextarea: action.text
            }


        default:
            return state
    }




}

export const addMessageActionCreator = () => {
    return {
        type: ADD__MESSAGE
    }
}
export const changeMessageTextareaActionCreator = (text) => {
    return {
        type: CHANGE__MESSAGE,
        text: text
    }
}

export default messagesReducer;