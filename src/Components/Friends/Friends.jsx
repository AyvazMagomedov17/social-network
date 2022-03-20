
import FriendListContainer from './FriendList/FriendListContainer';
import s from './Friends.module.css'


const Friends = (props) => {

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