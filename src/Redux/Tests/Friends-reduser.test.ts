import { UsersDataType } from './../../Types/types';
import { usersApi, updateStatusApiType } from './../../Api/api';
import { FilterType, followUnfollowThunk } from './../Friends-reducer';
import friendsReducer, { FriendsReducerInitialStateType, friendsAction } from '../Friends-reducer';
import thunk from 'redux-thunk';
import { ResultCodeEnum } from '../../Types/types';

let state: FriendsReducerInitialStateType = {
    usersData: [{
        id: 0,
        followed: false,
        name: 'Dima',
        photos: {
            large: null,
            small: null
        },
        status: 'status 0',
        uniqueUrlName: 'https'
    },
    {
        id: 1,
        followed: true,
        name: 'Dima',
        photos: {
            large: null,
            small: null
        },
        status: 'status 1',
        uniqueUrlName: 'https'
    },
    {
        id: 2,
        followed: false,
        name: 'Dima',
        photos: {
            large: null,
            small: null
        },
        status: 'status 2',
        uniqueUrlName: 'https'
    },
    ],
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

beforeEach(() => {
    state = {
        usersData: [{
            id: 0,
            followed: false,
            name: 'Dima',
            photos: {
                large: null,
                small: null
            },
            status: 'status 0',
            uniqueUrlName: 'https'
        },
        {
            id: 1,
            followed: true,
            name: 'Dima',
            photos: {
                large: null,
                small: null
            },
            status: 'status 1',
            uniqueUrlName: 'https'
        },
        {
            id: 2,
            followed: false,
            name: 'Dima',
            photos: {
                large: null,
                small: null
            },
            status: 'status 2',
            uniqueUrlName: 'https'
        },
        ],
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
})
test('unfollow', () => {
    const newState = friendsReducer(state, friendsAction.toggleFollowAC(1))
    expect(newState.usersData[1].followed).toBeFalsy
    expect(newState.usersData[0].followed).toBeTruthy
})

jest.mock('./../../Api/api') // делаем мок получаемого оттуда файла
let usersApiMock = usersApi as jest.Mocked<typeof usersApi> // типизириуем правильно
let result: updateStatusApiType = { data: {}, fieldsErrors: [''], messages: [''], resultCode: ResultCodeEnum.Succes } // Cмотрим что возвращает наш usersApi.unFollowAPI (тип) и делаем такой же объет


test('ToggleFollow thunk succes', async () => {

    usersApiMock.unFollowAPI.mockReturnValue(Promise.resolve(result)) // что нам должен вернуть mock(Promise потому что это асинхронная ф-я)
    const dispatchMok = jest.fn() // создаем фейковый dispatch
    const getStateMok = jest.fn() // создаем фейковый getState
    let usersData = state.usersData
    const thunk = followUnfollowThunk(1, usersData) // передаем данные, нужные thunk(userId, usersData)

    await thunk(dispatchMok, getStateMok, {}) // запускаем нашу thunk
    expect(dispatchMok).toBeCalledTimes(3) // столько раз должен вызваться dispatch
    expect(dispatchMok).toHaveBeenNthCalledWith(1, friendsAction.togglefollowingInProgressAC(true, 1)) // 1 диспатч должен вызваться с такими параметарми(заглядваем в friends-reducer  )
    expect(dispatchMok).toHaveBeenNthCalledWith(2, friendsAction.toggleFollowAC(1))
    expect(dispatchMok).toHaveBeenNthCalledWith(3, friendsAction.togglefollowingInProgressAC(false, 1))
})
export { }