
import messagesReducer from "./Messages-reducer"
import profileReducer from "./Profile-reducer"




let store = {

    _state: {

        profilePage: {
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
        },
        messagesPage: {
            myMessageInfo: {
                id: 'me',
                name: 'Айваз',
                time: "10:00"
            },
            yourMessageInfo: {
                id: 'you',
                name: 'Зарема',
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
        },


    },
    getState() {

        return this._state
    },
    _callSubcriber() {
        console.log('state is changed')
    },


    subscribe(observer) {
        this._callSubcriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._callSubcriber(this._state)

    }

}




export default store;
