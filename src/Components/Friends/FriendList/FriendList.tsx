import { memo } from 'react';
//@ts-ignore
import Paginator from '../../common/Paginator/Paginator.tsx';
import Preloader from '../../common/Preloader/Preloader';
//@ts-ignore
import FriendContainer from './Friend/FriendContainer.tsx';
//@ts-ignore
import s from '../../../Styles/Friends/friendList.module.scss'
import { UsersDataType } from '../../../Types/types';


type PropsType = {
    totalUsersCount: number
    pageSize: number,
    usersData: Array<UsersDataType>
    setCurrentPage: (pageNumber: number) => void
    currentPage: number
    isFetching: boolean
}
let FriendList = memo(({ totalUsersCount, pageSize, usersData, setCurrentPage, currentPage, isFetching }: PropsType) => {


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
            <div className={s.body}>
                {isFetching
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

})


export default FriendList