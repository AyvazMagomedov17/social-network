import axios from 'axios';


import { NavLink } from 'react-router-dom';
import s from './Friend.module.css'


const Friend = (props) => {


    const toggleFollow = (userId) => {

        userId = props.id
        props.toggleFollow(userId)

    }
    let followUnfollow = () => {
        props.usersData.forEach((item) => {
            if (item.id === props.id && item.followed === false) {
                axios
                    .post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "5b99983c-761e-4c99-9af2-b8f56830af83"
                        }
                    })
                    .then((response) => {

                        if (response.data.resultCode === 0) {
                            toggleFollow()
                        }

                    })
            }
            if (item.id === props.id && item.followed === true) {
                axios
                    .delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "5b99983c-761e-4c99-9af2-b8f56830af83"
                        }
                    })
                    .then((response) => {

                        if (response.data.resultCode === 0) {
                            toggleFollow()
                        }

                    })
            }
        })
    }

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
                    <button onClick={() => {
                        followUnfollow()






                    }} className={s.follow}>
                        {props.follow}
                    </button>
                </div>

            </div>


        </li >
    )
}

export default Friend;