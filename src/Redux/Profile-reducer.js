import PostImg from '../Assets/img/Profile/user2.jpg'
import newPostImg from '../Assets/img/Profile/user1.jpg'
import { profileApi } from '../Api/api'
const ADD__POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
const SET_ACTUAL_STRING = 'profile/SET-ACTUAL-STRING'
const SET_STATUS = 'profile/SET-STATUS'
const UPDATE_STATUS = 'profile/UPDATE-STATUS'
const TOGGLE_GET_PROFILE = 'profile/TOGGLE-GET-PROFILE'

let initialState = {
    postData: [
        {
            id: 0,
            name: 'Sarah Chruz',
            follow: 'following',
            like: '10',
            dislike: '5',
            img: PostImg,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt'
        },
        {
            id: 1,
            name: 'Illon Mask',
            follow: 'unfollowing',
            like: '30',
            dislike: '1',
            img: PostImg,
            text: 'Как у тебя дела?'
        }
    ],
    profile: null,
    newPostTextarea: '',
    addPostImg: newPostImg,
    actualString: '',
    status: null,
    isgetProfile: false
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD__POST:

            if (action.text != '') {

                let newPost = {
                    id: 2,
                    name: 'ayvaz',
                    follow: 'unfollowing',
                    like: '0', dislike: '0',
                    img: newPostImg,
                    text: action.text
                }
                return {
                    ...state,
                    newPostTextarea: '',
                    postData: [newPost, ...state.postData]
                }

            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_ACTUAL_STRING:
            return { ...state, actualString: action.actualString }

        case SET_STATUS:
            return { ...state, status: action.status }
        case TOGGLE_GET_PROFILE:
            return { ...state, isgetProfile: !state.isgetProfile }
        case UPDATE_STATUS:
            return { ...state, status: action.status }

        default:
            return state
    }





}
export const addPostAC = (text) => {
    return {
        type: ADD__POST,
        text: text
    }
}


export const setUserProfileAC = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}
export const setActualStringAC = (actualString) => {
    return {
        type: SET_ACTUAL_STRING,
        actualString: actualString

    }
}
const setStatusAc = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}
const updateStatusAc = (status) => {
    return {
        type: UPDATE_STATUS,
        status
    }
}

const toggleGetProfileAC = () => {
    return {
        type: TOGGLE_GET_PROFILE
    }
}

export const getProfileThunk = (userId) => {
    return async (dispatch) => {
        dispatch(toggleGetProfileAC())
        let data = await profileApi.getProfileAPI(userId)
        dispatch(setUserProfileAC(data))
        dispatch(toggleGetProfileAC())


    }
}
export const getStatusThunk = (userId) => {
    return async (dispatch) => {
        let data = await profileApi.getStatusAPI(userId)
        dispatch(setStatusAc(data))

    }
}

export const updateStatusThunk = (status) => {
    return async (dispatch) => {
        let data = await profileApi.updateStatusApi(status)
        if (data.resultCode === 0) {
            dispatch(updateStatusAc(status))
        }
    }
}

export default profileReducer;