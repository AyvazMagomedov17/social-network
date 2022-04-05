import profileReducer, { addPostAC } from "./Profile-reducer";
import PostImg from '../Assets/img/Profile/user2.jpg'

test('new post should be added', () => {

    // test data
    let action = addPostAC('Новый пост')
    let State = {
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

    }

    // 2 action
    let newState = profileReducer(State, action)

    // 3 expectation
    expect(newState.postData.length).toBe(3)

}); 