

import { NavLink } from 'react-router-dom';
import s from './Friend.module.css'


const Friend = (props) => {
    return (
        <li className={s.friend}>
            <div className={s.left}>
                <NavLink to={`/profile/${props.id}`}>
                    <div className={s.img}>
                        <img src={props.img} alt="user" />
                    </div>
                </NavLink>
            </div>
            <div className={s.right}>
                <div className={s.first}>
                    <NavLink to={`/profile/${props.id}`} className={s.name}>
                        {props.name}
                    </NavLink>
                    <span className={s.location}>
                        {props.location}
                    </span>
                    <div className={s.sendMessage}>
                        <NavLink to={`/messages/${props.id}`}>Send message</NavLink>
                    </div>
                </div>
                <div className={s.second}>
                    <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => { // метод some возвращает true или false взависимости удовлетворяет ли хотя бы один элемент массива условию
                        props.followUnfollowThunk(props.id, props.usersData)
                    }} className={s.follow}>
                        {props.follow}
                    </button>
                </div>
            </div>
        </li >
    )
}

export default Friend;