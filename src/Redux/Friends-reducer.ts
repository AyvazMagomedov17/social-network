
import { UsersDataType } from '../Types/types';




import { usersApi } from "../Api/api"
import { ThunkAction } from 'redux-thunk';
import { stateType } from './Redux-store';

const SET_USERS = 'friends/SET-USERS'
const TOGGLE_FOLLOW = 'friends/TOGGLE-FOLLOW'
const SET_CURRENT_PAGE = 'friends/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'friends/SET-TOTAL-USERS-COUNT'
const CHANGE_FETCHING = 'friends/CHANGE-FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'friends/TOGGLE-FOLLOWING-IN-PROGRESS'
const WHO_TO_FOLLOW_SET_USERS = 'friends/WHO_TO_FOLLOW_SET_USERS'

//ACTION TYPES
type toggleFollowACType = {
    type: typeof TOGGLE_FOLLOW
    userId: number
}
type setUsersACType = {
    type: typeof SET_USERS
    users: Array<UsersDataType>
}
type setCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type whoToFollowSetUsersACType = {
    type: typeof WHO_TO_FOLLOW_SET_USERS
    users: Array<UsersDataType>
}
type setTotalUsersCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    count: number
}
type changeFetchingACType = {
    type: typeof CHANGE_FETCHING
}

type togglefollowingInProgressACType = {
    type: typeof TOGGLE_FOLLOWING_IN_PROGRESS,
    isFollowingInProgress: boolean
    userId: number
}
type ActionTypes = toggleFollowACType | setUsersACType | setCurrentPageACType | whoToFollowSetUsersACType | setTotalUsersCountACType | changeFetchingACType | togglefollowingInProgressACType
type ThunkType = ThunkAction<Promise<void>, stateType, unknown, ActionTypes>



let initialState = {
    usersData: [] as Array<UsersDataType>,
    whoToFollowsData: [] as Array<UsersDataType>,
    pageSize: 100 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: true as boolean,
    followingInProgressArr: [] as Array<number> //array of userid
}

export type FriendsReducerInitialStateType = typeof initialState

const friendsReducer = (state = initialState, action: ActionTypes): FriendsReducerInitialStateType => {
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
        case SET_CURRENT_PAGE:
            return { ...state, usersData: [], currentPage: action.currentPage, isFetching: !state.isFetching }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }
        case CHANGE_FETCHING:
            return { ...state, isFetching: !state.isFetching }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {

                ...state, followingInProgressArr: action.isFollowingInProgress
                    ? [...state.followingInProgressArr, action.userId] // пока делается запрос на сервер
                    : state.followingInProgressArr.filter(id => id != action.userId) // после того, как сервер закончил запрос
            }
        case WHO_TO_FOLLOW_SET_USERS:

            return { ...state, whoToFollowsData: action.users }
        default:
            return state
    }
}


export const toggleFollowAC = (userId: number): toggleFollowACType => ({
    type: TOGGLE_FOLLOW,
    userId: userId
})

export const setUsersAC = (users: Array<UsersDataType>): setUsersACType => ({
    type: SET_USERS,
    users: users
})

export const whoToFollowSetUsersAC = (users: Array<UsersDataType>): whoToFollowSetUsersACType => ({
    type: WHO_TO_FOLLOW_SET_USERS,
    users
})

export const setCurrentPageAC = (currentPage: number): setCurrentPageACType => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})


export const setTotalUsersCountAC = (count: number): setTotalUsersCountACType => ({
    type: SET_TOTAL_USERS_COUNT,
    count
})


export const changeFetchingAC = (): changeFetchingACType => ({ type: CHANGE_FETCHING })


export const togglefollowingInProgressAC = (isFollowingInProgress: boolean, userId: number): togglefollowingInProgressACType => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFollowingInProgress,
    userId
})



export const getUsersThunk = (currentPage: number, pageSize: number, fromWho: string): ThunkType => {
    return async (dispatch, getState) => {

        let data = await usersApi.getUsersAPI(currentPage, pageSize)
        if (fromWho === 'FRIENDS') {

            dispatch(setUsersAC(data.items))
            dispatch(setTotalUsersCountAC(data.totalCount))
            dispatch(changeFetchingAC())
        }
        if (fromWho === 'WHO_TO_FOLLOW') {
            dispatch(whoToFollowSetUsersAC(data.items))
        }

    }
}

export const setCurrentPageThunk = (pageNumber: number, pageSize: number): ThunkType => {

    return async (dispatch) => {
        dispatch(setCurrentPageAC(pageNumber))
        let data = await usersApi.getUsersAPI(pageNumber, pageSize)
        dispatch(setUsersAC(data.items))
        dispatch(changeFetchingAC())
    }
}

export const followUnfollowThunk = (userId: number, usersData: Array<UsersDataType>): ThunkType => {
    return async (dispatch) => {
        dispatch(togglefollowingInProgressAC(true, userId))
        usersData.forEach(async (item) => {
            if (item.id === userId && item.followed === false) {
                let data = await usersApi.FollowAPI(userId)
                if (data.resultCode === 0) {
                    dispatch(toggleFollowAC(userId))
                }
                dispatch(togglefollowingInProgressAC(false, userId))
            }
            if (item.id === userId && item.followed === true) {
                let data = await usersApi.unFollowAPI(userId)
                if (data.resultCode === 0) {
                    dispatch(toggleFollowAC(userId))
                }
                dispatch(togglefollowingInProgressAC(false, userId))

            }
        })
    }
}
export default friendsReducer;