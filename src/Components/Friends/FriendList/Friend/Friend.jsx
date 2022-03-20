import { NavLink } from 'react-router-dom';
import s from './Friend.module.css'


const Friend = (props) => {

    const toggleFollow = (userId) => {

        userId = props.id
        props.toggleFollow(userId)

    }

    return (
        <li className={s.friend}>
            <div className={s.left}>
                <NavLink to='/friends/#'>
                    <div className={s.img}>

                        <img src={props.img} alt="user" />
                    </div>
                </NavLink>

            </div>
            <div className={s.right}>
                <div className={s.first}>
                    <NavLink to='/friends/#' className={s.name}>
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
                    <button onClick={toggleFollow} className={s.follow}>
                        {props.follow}
                    </button>
                </div>

            </div>


        </li>
    )
}

export default Friend;