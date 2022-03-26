import { authApi } from "../Api/api"


const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return { ...state, ...action.data, isAuth: true }

        default:
            return state
    }
}

export const setAuthUserDataAC = (id, email, login) => {
    return {
        type: SET_USER_DATA,
        data: { id, email, login }
    }
}

export const getLoginThunkCreator = () => {
    return (dispatch) => {
        authApi.getLoginAPI()
            .then((data) => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data
                    dispatch(setAuthUserDataAC(id, email, login))
                }
            })
    }
}
export default authReducer