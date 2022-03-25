import axios from 'axios';


import { NavLink } from 'react-router-dom';
import { usersApi } from '../../../../Api/api';
import s from './Friend.module.css'


const Friend = (props) => {


    const toggleFollow = (userId) => {
        userId = props.id
        props.toggleFollow(userId)
    }

    let followUnfollow = () => {
        props.togglefollowingInProgress(true, props.id)
        props.usersData.forEach((item) => {
            if (item.id === props.id && item.followed === false) {
                usersApi.FollowAPI(props.id)
                    .then((data) => {

                        if (data.resultCode === 0) {
                            toggleFollow()
                        }

                        props.togglefollowingInProgress(false, props.id)

                    })
            }
            if (item.id === props.id && item.followed === true) {
                usersApi.unFollowAPI(props.id)
                    .then((data) => {

                        if (data.resultCode === 0) {
                            toggleFollow()
                        }
                        props.togglefollowingInProgress(false, props.id)
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
                    <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
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