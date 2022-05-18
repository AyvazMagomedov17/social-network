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
const TOGGLE_DIALOGS_IS_FETCHING = 'messages/TOGGLE_DIALOGS_IS_FETCHING'
const ClEAR_DIALOG_LIST = 'messages/ClEAR_DIALOG_LIST'


//ACTION-TYPES 
type ActionTypes = InferActionsTypes<typeof MessagesActions>

//STATE TYPE
export type initialStateMessagesType = typeof initialState
type ThunkType = BaseThunkType<ActionTypes>

let initialState = {

    dialogList: [
    ] as Array<GetAllDialogsAPIType>,
    messagesList: [] as Array<GetOneMessageType> | Array<any>,
    countOfNewMessages: 0 as number,
    messagesIsFetching: false as boolean,
    totalMessagesCount: 0 as number,
    dialogsIsFetching: false as boolean

}

const messagesReducer = (state = initialState, action: ActionTypes): initialStateMessagesType => {

    switch (action.type) {


        case SET_COUNT_OF_NEW_MESSAGES:
            return { ...state, countOfNewMessages: action.count }
        case SET_DIALOG_LIST:
            return { ...state, dialogList: [...action.dialogList, ...state.dialogList] }
        case SET_MESSAGES_LIST:
            return { ...state, messagesList: [...action.messagesList] }
        case SEND_MESSAGE:
            return { ...state, messagesList: [...state.messagesList, action.message] }
        case DELETE_MESSAGES_LIST:
            return { ...state, messagesList: [], totalMessagesCount: 0 }
        case SET_MESSAGES_FETCHING:
            return { ...state, messagesIsFetching: action.isFetching }
        case SET_TOTAL_MESSAGES_COUNT:
            return { ...state, totalMessagesCount: action.count }
        case TOGGLE_DIALOGS_IS_FETCHING:
            return { ...state, dialogsIsFetching: action.payload }
        case ClEAR_DIALOG_LIST:
            return { ...state, dialogList: [] }
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
    } as const),
    toggleDialogsIsFetchingAC: (payload: boolean) => ({
        type: TOGGLE_DIALOGS_IS_FETCHING,
        payload
    } as const),
    clearDialogList: () => ({
        type: ClEAR_DIALOG_LIST
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
export const startNewDialogThunk = (id: number): ThunkType => async (dispatch) => {
    dispatch(MessagesActions.toggleDialogsIsFetchingAC(true))

    const response = await dialogsApi.startDialogAPI(id)
    if (response.resultCode === ResultCodeEnum.Succes) {
        dispatch(MessagesActions.toggleDialogsIsFetchingAC(false))
    } else {
        alert('ошибка')
        dispatch(MessagesActions.toggleDialogsIsFetchingAC(false))

    }


}



export default messagesReducer;