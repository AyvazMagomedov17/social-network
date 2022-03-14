import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css'

const Dialog = (props) => {
    let path = '/messages/' + props.id;
    return (


        <div className={s.dialog}>
            <NavLink to={path} className={s.row}>
                <div className={s.left}>
                    <div className={s.img}>
                        <img src="img/Dialogs/user1.jpg" alt="dialogUser" />
                    </div>

                </div>
                <div className={s.right}>
                    <div className={s.top}>
                        <span className={s.name}>{props.name}</span>
                        <span className={s.status}>a min ago</span>
                    </div>
                    <div className={s.bottom}>
                        <div className={s.lastMessage}>Last message</div>
                        <div className={s.newMessage}>1</div>
                    </div>
                </div>
            </NavLink>
        </div>


    )
}

export default Dialog;