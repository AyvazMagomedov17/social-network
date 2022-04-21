import { memo } from 'react';
//@ts-ignore
import Paginator from '../../common/Paginator/Paginator.tsx';
import Preloader from '../../common/Preloader/Preloader';
//@ts-ignore
import FriendContainer from './Friend/FriendContainer.tsx';
//@ts-ignore
import s from '../../../Styles/Friends/friendList.module.scss'
import { UsersDataType } from '../../../Types/types';
import FriendListFindForm from './FriendListFindForm/FriendListFindForm';


type PropsType = {
    totalUsersCount: number
    pageSize: number,
    usersData: Array<UsersDataType>
    setCurrentPage: (pageNumber: number) => void
    currentPage: number
    isFetching: boolean
    setIsGetFriends: React.Dispatch<React.SetStateAction<boolean>>
    isGetFriends: boolean
    setisClick: React.Dispatch<React.SetStateAction<boolean>>
    setIsFindUsers: React.Dispatch<React.SetStateAction<boolean>>

    setTermForFindUsers: React.Dispatch<React.SetStateAction<string>>

}
let FriendList = ({ setTermForFindUsers, setIsFindUsers, setisClick, isGetFriends, setIsGetFriends, totalUsersCount, pageSize, usersData, setCurrentPage, currentPage, isFetching }: PropsType) => {


    let usersELem = usersData
        .map((user) => {
            if (user.followed === true) {
                return <FriendContainer name={user.name} follow='Followed' location={`City, Country`} userId={user.id} img={user.photos.small != null ? user.photos.small : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} />
            } else {
                return <FriendContainer name={user.name} follow='Unfollowed' location={`City, Country`} userId={user.id} img={user.photos.small != null ? user.photos.small : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} />
            }
        }
        )

    return (
        <div className={s.friendlist}>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            <FriendListFindForm setIsFindUsers={setIsFindUsers} setTermForFindUsers={setTermForFindUsers} setisClick={setisClick} />
            <div className={s.friendsCheckboxBox}>
                <input id='friendsCheckbox' className={s.friendsCheckbox} type='checkbox' onClick={() => {
                    setIsGetFriends(!isGetFriends)
                    setisClick(true)
                }} />
                <label htmlFor="friendsCheckbox"></label>
                <span>Only subscriptions</span>
            </div>
            <div className={s.body}>
                {isFetching || usersData.length === 0
                    ?
                    <Preloader />
                    :
                    <div className={''} >

                        <ul className={s.list}>
                            {usersELem}
                        </ul>
                    </div >
                }
            </div>


        </div>)

}


export default FriendList