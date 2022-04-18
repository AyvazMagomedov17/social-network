import { NavLink } from 'react-router-dom';
import s from '../../../Styles/WhoToFollow/item.module.scss'
import FollowButton from '../../common/FollowButton/FollowButton';


const Item = (props) => {
    return (
        <li className={s.item}>
            <div className={s.img}><img src={props.img} alt="people" /></div>

            <div className={s.body}>
                <NavLink to={`profile/${props.id}`}>
                    <p className={s.name}>{props.name}</p>
                </NavLink>
                <FollowButton style={{ 'width': '100px', 'height': '20px' }} disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
                    props.toggleFollows(props.id, props.usersData)
                }} className={s.addFriend}>{props.followed}</FollowButton>
            </div>

        </li>
    )
}

export default Item;