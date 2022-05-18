
import FriendListContainer from './FriendList/FriendListContainer';
//@ts-ignore
import s from '../../Styles/Friends/friends.module.scss'
import { useEffect } from 'react';
import { compose } from 'redux';
import withAuthRedirect from '../../Hoc/withAuthRedirect';


const Friends = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div className={s.friends}>
            <div className={s.body}>
                <h2 className={s.title}>Friends</h2>
                <FriendListContainer />
            </div>
        </div>
    )
}

export default compose(
    withAuthRedirect
)(Friends)