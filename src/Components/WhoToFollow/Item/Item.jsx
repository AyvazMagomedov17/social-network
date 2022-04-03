import { NavLink } from 'react-router-dom';
import s from './Item.module.css'


const Item = (props) => {
    return (
        <li className={s.item}>
            <div className={s.img}><img src={props.img} alt="people" /></div>

            <div className={s.body}>
                <NavLink to={`profile/${props.id}`}>
                    <span className={s.name}>{props.name}</span>
                </NavLink>
                <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
                    props.toggleFollows(props.id, props.usersData)
                }} className={s.addFriend}>{props.followed}</button>
            </div>

        </li>
    )
}

export default Item;