import { memo } from 'react';
import Paginator from '../../common/Paginator/Paginator';
import Preloader from '../../common/Preloader/Preloader';
import FriendContainer from './Friend/FriendContainer';
import s from './FriendList.module.css'

let FriendList = memo((props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let usersELem = props.usersData
        .map((user) => {
            if (user.followed === true) {
                return <FriendContainer name={user.name} follow='Followed' location={`City, Country`} id={user.id} img={user.photos.small != null ? user.photos.small : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} />
            } else {
                return <FriendContainer name={user.name} follow='Unfollowed' location={`City, Country`} id={user.id} img={user.photos.small != null ? user.photos.small : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} />
            }
        }
        )
    return (
        <>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} setCurrentPage={props.setCurrentPage} currentPage={props.currentPage} />
            {props.isFetching
                ?
                <Preloader />
                :
                <div className={s.friendlist} >

                    <ul className={s.list}>
                        {usersELem}
                    </ul>
                </div >
            }

        </>)

})


export default FriendList