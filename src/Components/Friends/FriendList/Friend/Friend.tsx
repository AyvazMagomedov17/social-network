

import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { UsersDataType } from '../../../../Types/types';
//@ts-ignore
import s from '../../../../Styles/Friends/friend.module.scss'
import FollowButton from '../../../common/FollowButton/FollowButton';
import { dialogsApi } from '../../../../Api/api';
import { useDispatch } from 'react-redux';
import { startNewDialogThunk } from '../../../../Redux/Messages-reducer';

export type FriendPropsType = {
    userId: number
    img: string
    name: string
    location: string
    followingInProgress: Array<number> // массив id на которых сейчас идет подписка
    usersData: Array<UsersDataType>
    follow: string
    followUnfollowThunk: (id: number, usersData: Array<UsersDataType>) => void
}

const Friend = memo(({ userId, img, name, location, followingInProgress, usersData, follow, followUnfollowThunk }: FriendPropsType) => {
    const dispatch = useDispatch()
    const clickOnSendMessage = async () => {
        dispatch(startNewDialogThunk(userId))

    }
    return (
        <li className={s.friend}>
            <div className={s.left}>
                <NavLink to={`/profile/${userId}`}>
                    <div className={s.img}>
                        <img src={img} alt="user" />
                    </div>
                </NavLink>
            </div>
            <div className={s.right}>
                <div className={s.first}>
                    <NavLink to={`/profile/${userId}`} className={s.name}>
                        {name}
                    </NavLink>
                    <span className={s.location}>
                        id: {userId}
                    </span>
                    <div onClick={clickOnSendMessage} className={s.sendMessage}>
                        <NavLink to={`/messages/${userId}`}>Send message</NavLink>
                    </div>
                </div>
                <div className={s.second}>
                    <FollowButton disabled={followingInProgress.some(id => id === userId)} onClick={() => { // метод some возвращает true или false взависимости удовлетворяет ли хотя бы один элемент массива условию
                        followUnfollowThunk(userId, usersData)
                    }} className={s.follow}>
                        {follow}
                    </FollowButton>
                </div>
            </div>
        </li >
    )
})

export default Friend;