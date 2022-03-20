const ADD__POST = 'ADD-POST'
const CHANGE_TEXTAREA = 'CHANGE-TEXTAREA'
let initialState = {
    postData: [
        {
            id: 0,
            name: 'Sarah Chruz',
            follow: 'following',
            like: '10',
            dislike: '5',
            img: 'img/Profile/user2.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt'
        },
        {
            id: 1,
            name: 'Illon Mask',
            follow: 'unfollowing',
            like: '30',
            dislike: '1',
            img: 'img/Profile/user2.jpg',
            text: 'Как у тебя дела?'
        }
    ],
    newPostTextarea: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD__POST:

            if (state.newPostTextarea != '') {

                let newPost = {
                    id: 2,
                    name: 'ayvaz',
                    follow: 'unfollowing',
                    like: '0', dislike: '0',
                    img: 'img/Profile/user2.jpg',
                    text: state.newPostTextarea
                }
                return {
                    ...state,
                    newPostTextarea: '',
                    postData: [newPost, ...state.postData]
                }

            }

        case CHANGE_TEXTAREA:
            return {
                ...state,
                newPostTextarea: action.text
            }


        default:
            return state
    }



}
export const addPostActionCreator = () => {
    return {
        type: ADD__POST
    }
}

export const changeTextareaActionCreator = (text) => {
    return {
        type: CHANGE_TEXTAREA,
        text: text
    }
}

export default profileReducer;