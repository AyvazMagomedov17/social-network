import { profileActions } from './Profile-reducer';
import { BaseThunkType } from './../Types/types';
import { ResultCodeEnum, UsersDataType } from '../Types/types';
import { usersApi } from "../Api/api"
import { InferActionsTypes } from './Redux-store';

const SET_USERS = 'friends/SET-USERS'
const TOGGLE_FOLLOW = 'friends/TOGGLE-FOLLOW'
const SET_CURRENT_PAGE = 'friends/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'friends/SET-TOTAL-USERS-COUNT'
const CHANGE_FETCHING = 'friends/CHANGE-FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'friends/TOGGLE-FOLLOWING-IN-PROGRESS'
const WHO_TO_FOLLOW_SET_USERS = 'friends/WHO_TO_FOLLOW_SET_USERS'
const IS_FRIEDS_USER_IN_STATE = 'friends/IS-FRIEDS-USER-IN-STATE'
const IS_FIND_USERS_IN_STATE = 'friends/IS-FIND-USERS-IN-STATE'
const SET_FRIENDS = 'friends/SET-FRIENDS '
const SET_FIND_USERS = 'friends/SET_FIND_USERS'
const SET_FILTER = 'friends/SET-FILTER'

//ACTION TYPES

type ActionTypes = InferActionsTypes<typeof friendsAction>

type ThunkType = BaseThunkType<ActionTypes>


export type FilterType = {
    term: string | undefined
    friend: null | string | boolean
}
let initialState = {
    usersData: [] as Array<UsersDataType>,
    whoToFollowsData: [] as Array<UsersDataType>,
    pageSize: 100 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: true as boolean,
    followingInProgressArr: [] as Array<number>, //array of userid

    isFindUsersInState: false as boolean,
    filter: {
        term: '',
        friend: null
    } as FilterType
}

export type FriendsReducerInitialStateType = typeof initialState

export const friendsReducer = (state = initialState, action: ActionTypes): FriendsReducerInitialStateType => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            let stateCopy = {
                ...state,
                usersData: state.usersData.map((u) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: !u.followed,
                        }
                    }
                    return u
                }),
                whoToFollowsData: state.whoToFollowsData.map((u) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: !u.followed,
                        }
                    }
                    return u
                })
            }
            return stateCopy
        }
        case SET_USERS: {
            return { ...state, usersData: action.users }
        }
        case SET_FRIENDS:

            return { ...state, usersData: action.friends }
        case SET_FIND_USERS:

            return { ...state, usersData: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, usersData: [], currentPage: action.currentPage, isFetching: false }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }
        case CHANGE_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state, followingInProgressArr: action.isFollowingInProgress
                    ? [...state.followingInProgressArr, action.userId] // ???????? ???????????????? ???????????? ???? ????????????
                    : state.followingInProgressArr.filter(id => id != action.userId) // ?????????? ????????, ?????? ???????????? ???????????????? ????????????
            }
        case WHO_TO_FOLLOW_SET_USERS:

            return { ...state, whoToFollowsData: action.users }

        case IS_FIND_USERS_IN_STATE:
            return { ...state, isFindUsersInState: action.isFindUsers }
        case SET_FILTER:
            return { ...state, filter: { ...action } }
        default:
            return state
    }
}


export const friendsAction = {
    toggleFollowAC: (userId: number) => ({
        type: TOGGLE_FOLLOW,
        userId: userId
    } as const),

    setUsersAC: (users: Array<UsersDataType>) => ({
        type: SET_USERS,
        users: users
    } as const),
    setfriendsAC: (friends: Array<UsersDataType>) => ({
        type: SET_FRIENDS,
        friends
    } as const),
    setfindUsersAC: (users: Array<UsersDataType>) => ({
        type: SET_FIND_USERS,
        users
    } as const),
    whoToFollowSetUsersAC: (users: Array<UsersDataType>) => ({
        type: WHO_TO_FOLLOW_SET_USERS,
        users
    } as const),

    setCurrentPageAC: (currentPage: number) => ({
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    } as const),


    setTotalUsersCountAC: (count: number) => ({
        type: SET_TOTAL_USERS_COUNT,
        count
    } as const),


    changeFetchingAC: (isFetching: boolean) => ({ type: CHANGE_FETCHING, isFetching } as const),
    togglefollowingInProgressAC: (isFollowingInProgress: boolean, userId: number) => ({
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        isFollowingInProgress,
        userId
    } as const),

    setIsFindUsersInStateAC: (isFindUsers: boolean) => ({
        type: IS_FIND_USERS_IN_STATE,
        isFindUsers
    } as const),
    setFilterAC: ({ term, friend }: FilterType) => {

        return {

            type: SET_FILTER,
            term: term,
            friend: friend
        } as const
    }
}




export const getUsersThunk = (currentPage: number, pageSize: number, fromWho: string): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(friendsAction.changeFetchingAC(true))
        let data = await usersApi.getUsersAPI(currentPage, pageSize)
        if (fromWho === 'FRIENDS') {
            dispatch(friendsAction.setUsersAC(data.items))
            dispatch(friendsAction.setTotalUsersCountAC(data.totalCount))
            dispatch(friendsAction.changeFetchingAC(false))
            dispatch(friendsAction.setIsFindUsersInStateAC(false))
        }
        if (fromWho === 'WHO_TO_FOLLOW') {
            dispatch(friendsAction.whoToFollowSetUsersAC(data.items))
        }

    }
}


export const filterUsersThunk = (currentPage: number, pageSize: number, term: string | undefined, friend: boolean | string | null): ThunkType => async (dispatch, getState) => {
    dispatch(friendsAction.changeFetchingAC(true))
    //@ts-ignore
    let data = await usersApi.filterUsersAPI(currentPage, pageSize, term, friend)
    dispatch(friendsAction.setfindUsersAC(data.items))
    dispatch(friendsAction.setTotalUsersCountAC(data.totalCount))
    dispatch(friendsAction.changeFetchingAC(false))

    dispatch(friendsAction.setIsFindUsersInStateAC(true))

}

export const setCurrentPageThunk = (pageNumber: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {

        let isFindUsers = getState().friendsPage.isFindUsersInState
        const term = getState().friendsPage.filter.term
        const friend = getState().friendsPage.filter.friend
        if (!isFindUsers) {

            dispatch(friendsAction.setCurrentPageAC(pageNumber))
            console.log('?????????? ???????????????? ?? setCurrentPageThunk')
            let data = await usersApi.getUsersAPI(pageNumber, pageSize)
            dispatch(friendsAction.setUsersAC(data.items))
        }

        if (isFindUsers) {

            dispatch(friendsAction.setCurrentPageAC(pageNumber))
            console.log('?????????? ???????????????? ?? setCurrentPageThunk')
            //todo 
            //@ts-ignore
            let data = await usersApi.filterUsersAPI(pageNumber, pageSize, term, friend)
            dispatch(friendsAction.setfindUsersAC(data.items))
        }
        dispatch(friendsAction.changeFetchingAC(false))
    }
}


export const followUnfollowThunk = (userId: number, usersData: Array<UsersDataType>): ThunkType => {
    return async (dispatch, getState) => {
        const profilePage = getState().profilePage.profile
        dispatch(friendsAction.togglefollowingInProgressAC(true, userId))
        usersData.forEach(async (item) => {
            if (item.id === userId && item.followed === false) {
                let data = await usersApi.FollowAPI(userId)
                if (data.resultCode === ResultCodeEnum.Succes) {

                    dispatch(friendsAction.toggleFollowAC(userId))
                    if (profilePage?.userId === userId) {
                        //@ts-ignore
                        dispatch(profileActions.toggleIsFollowUserAc(true))
                    }
                }
                dispatch(friendsAction.togglefollowingInProgressAC(false, userId))
            }
            if (item.id === userId && item.followed === true) {
                let data = await usersApi.unFollowAPI(userId)
                if (data.resultCode === ResultCodeEnum.Succes) {
                    dispatch(friendsAction.toggleFollowAC(userId))
                    if (profilePage?.userId === userId) {
                        //@ts-ignore
                        dispatch(profileActions.toggleIsFollowUserAc(false))
                    }
                }
                dispatch(friendsAction.togglefollowingInProgressAC(false, userId))

            }
        })
    }
}
export default friendsReducer;