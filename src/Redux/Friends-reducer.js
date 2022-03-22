
const SET_USERS = 'SET-USERS'
const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const CHANGE_FETCHING = 'CHANGE-FETCHING'

let initialState = {
    usersData: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}
const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            debugger
            let stateCopy = {
                ...state,
                usersData: state.usersData.map((u) => {
                    if (u.id === action.userId) {
                        debugger
                        return {
                            ...u,
                            followed: !u.followed,
                        }
                    }
                    debugger
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
            debugger
            return { ...state, isFetching: !state.isFetching }

        default:
            return state
    }
}


export const toggleFollowAC = (userId) => {
    return {
        type: TOGGLE_FOLLOW,
        userId: userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}
export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}
export const setTotalUsersCountAC = (count) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count
    }
}
export const changeFetchingAC = () => {
    return {
        type: CHANGE_FETCHING
    }
}

export default friendsReducer;