import { memo, useState } from 'react';
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



    setTermForFindUsers: React.Dispatch<React.SetStateAction<string>>

}
let FriendList = ({ setTermForFindUsers, totalUsersCount, pageSize, usersData, setCurrentPage, currentPage, isFetching }: PropsType) => {
    const [portionNumber, setPortionNumber] = useState(1)

    let usersELem = usersData
        .map((user) => {
            if (user.followed === true) {
                return <FriendContainer key={user.id} name={user.name} follow='Followed' location={`City, Country`} userId={user.id} img={user.photos.small != null ? user.photos.small : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} />
            } else {
                return <FriendContainer key={user.id} name={user.name} follow='Unfollowed' location={`City, Country`} userId={user.id} img={user.photos.small != null ? user.photos.small : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} />
            }
        }
        )

    return (
        <div className={s.friendlist}>
            <Paginator setPortionNumber={setPortionNumber} portionNumber={portionNumber} totalItemsCount={totalUsersCount} pageSize={pageSize} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            <FriendListFindForm setPortionNumber={setPortionNumber} setTermForFindUsers={setTermForFindUsers} />
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