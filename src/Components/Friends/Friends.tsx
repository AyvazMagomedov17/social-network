
import FriendListContainer from './FriendList/FriendListContainer';
//@ts-ignore
import s from '../../Styles/Friends/friends.module.scss'


const Friends = () => {

    return (
        <div className={s.friends}>
            <div className={s.body}>
                <h2 className={s.title}>Friends</h2>
                <FriendListContainer />
            </div>
        </div>
    )
}

export default Friends;