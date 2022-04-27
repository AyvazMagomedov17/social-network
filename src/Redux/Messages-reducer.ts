import { GetAllDialogsAPIType, GetOneMessageType, SendOneMessageType, dialogsApi } from './../Api/api';
import { InferActionsTypes } from './Redux-store';
import { MessageDataType, MessageInfoType, BaseThunkType, ResultCodeEnum } from './../Types/types';
import { dialogDataType } from "../Types/types"

const ADD__MESSAGE = 'messages/ADD-MESSAGE'
const SEND_MESSAGE = 'messages/SEND_MESSAGE'
const SET_COUNT_OF_NEW_MESSAGES = 'messages/SET_COUNT_OF_NEW_MESSAGES'
const SET_DIALOG_LIST = 'messages/SET_DIALOG_LOST'
const SET_MESSAGES_LIST = 'messages/SET_MESSAGES_LIST'
const SET_MESSAGES_FETCHING = 'messages/SET_MESSAGES_FETCHING'
const DELETE_MESSAGES_LIST = 'messages/DELETE_MESSAGES_LIST'
const SET_TOTAL_MESSAGES_COUNT = 'messages/SET_TOTAL_MESSAGES_COUNT'


//ACTION-TYPES 
type ActionTypes = InferActionsTypes<typeof MessagesActions>

//STATE TYPE
export type initialStateMessagesType = typeof initialState
type ThunkType = BaseThunkType<ActionTypes>

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
    dialogList: [
    ] as Array<GetAllDialogsAPIType>,
    messagesList: [] as Array<GetOneMessageType> | Array<any>,
    countOfNewMessages: 0 as number,
    messagesIsFetching: false as boolean,
    totalMessagesCount: 0 as number

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
                    MessageData: [...state.MessageData, newMessage],

                }
            }
            return state

        case SET_COUNT_OF_NEW_MESSAGES:
            return { ...state, countOfNewMessages: action.count }
        case SET_DIALOG_LIST:
            return { ...state, dialogList: action.dialogList }
        case SET_MESSAGES_LIST:
            return { ...state, messagesList: [...action.messagesList, ...state.messagesList] }
        case SEND_MESSAGE:
            return { ...state, messagesList: [...state.messagesList, action.message] }
        case DELETE_MESSAGES_LIST:
            return { ...state, messagesList: [], totalMessagesCount: 0 }
        case SET_MESSAGES_FETCHING:
            return { ...state, messagesIsFetching: action.isFetching }
        case SET_TOTAL_MESSAGES_COUNT:
            return { ...state, totalMessagesCount: action.count }
        default:
            return state
    }
}

export const MessagesActions = {
    addMessageAC: (message: string) => ({
        type: ADD__MESSAGE,
        message
    } as const),
    sendMessageAC: (message: SendOneMessageType) => ({
        type: SEND_MESSAGE,
        message
    } as const),
    setCountOfNewMessagesAC: (count: number) => ({
        type: SET_COUNT_OF_NEW_MESSAGES,
        count
    } as const),
    setDialogListAC: (dialogList: Array<GetAllDialogsAPIType>) => ({
        type: SET_DIALOG_LIST,
        dialogList
    } as const),
    setMessagesListAC: (messagesList: Array<GetOneMessageType>) => ({
        type: SET_MESSAGES_LIST,
        messagesList
    } as const),
    setMessagesFetchingAC: (isFetching: boolean) => ({
        type: SET_MESSAGES_FETCHING,
        isFetching
    } as const),
    deleteMessagesListAC: () => ({
        type: DELETE_MESSAGES_LIST
    } as const),
    setTotalMessagesCountAC: (count: number) => ({
        type: SET_TOTAL_MESSAGES_COUNT,
        count
    } as const)


}

export const getMessagesThunk = (userId: number, page: number = 1, count: number = 20): ThunkType => async (dispatch) => {

    const response = await dialogsApi.getMessagesAPI(userId, page, count)
    if (response.error === null) {
        dispatch(MessagesActions.setMessagesListAC(response.items))
        dispatch(MessagesActions.setTotalMessagesCountAC(response.totalCount))

    }

}

export const getDialogsThunk = (): ThunkType => async (dispatch) => {
    dispatch(MessagesActions.setMessagesFetchingAC(true))

    const response = await dialogsApi.getAllDialogsAPI()
    dispatch(MessagesActions.setDialogListAC(response))
    dispatch(MessagesActions.setMessagesFetchingAC(false))



}
export const sendMessageThunk = (userId: number, body: string): ThunkType => async (dispatch, getState) => {

    const response = await dialogsApi.sendMessagesAPI(userId, body)
    if (response.resultCode === ResultCodeEnum.Succes) {
        dispatch(MessagesActions.sendMessageAC(response.data.message))
        const totalMessagesCount = (await dialogsApi.getMessagesAPI(userId)).totalCount
        dispatch(MessagesActions.setTotalMessagesCountAC(totalMessagesCount))


    }
}
export const getCountOfNewMessagesThunk = (): ThunkType => async (dispatch) => {
    dispatch(MessagesActions.setMessagesFetchingAC(true))
    const response = await dialogsApi.getCountOfNewMessagesAPI()
    dispatch(MessagesActions.setCountOfNewMessagesAC(response))
    dispatch(MessagesActions.setMessagesFetchingAC(false))

}



export default messagesReducer;