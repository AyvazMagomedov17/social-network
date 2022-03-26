import { usersApi } from "../Api/api"

const SET__FOLLOWS = 'SET-FOLLOWS'
const TOGGLE_FOLLOWS = 'TOGGLE-FOLLOWS'


let initialState = {
    followsData: [
    ]
}
const whoToFollowReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET__FOLLOWS:
            return { ...state, followsData: action.follows }
        case TOGGLE_FOLLOWS: {

            let stateCopy = {
                ...state,
                followsData: state.followsData.map((u) => {

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

        default:
            return state
    }
}

export const setFollowsAC = (follows) => {
    return {
        type: SET__FOLLOWS,
        follows: follows
    }
}
export const toggleFollowsAC = (userId) => {
    return {
        type: TOGGLE_FOLLOWS,
        userId: userId
    }
}
export const whoToFollowThunkCreator = (page, count) => {
    return (dispatch) => {
        usersApi.getUsersAPI(page, count)
            .then((data) => {
                dispatch(setFollowsAC(data.items))
            })
    }
}

export default whoToFollowReducer;