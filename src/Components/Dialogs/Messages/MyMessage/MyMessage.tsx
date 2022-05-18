import { NavLink } from 'react-router-dom';
//@ts-ignore

import s from '../../../../Styles/Dialogs/myMessage.module.scss'
import { YourMessageMyMessagePropsType } from '../YourMessage/YourMessage';

const MyMessage = ({ id, time, name, NewMessageElement, img }: YourMessageMyMessagePropsType) => {
    return (
        <div className={s.message}>
            <div className={s.column}>
                <div className={s.rowReverse}>
                    <div className={s.profile}>
                        <NavLink to={`/profile/${id}`}>
                            <div className={s.img}>
                                <img src={img} alt="" />
                            </div>
                        </NavLink>
                        <span className={s.data}>{time}</span>
                        <span className={s.name}>{name}</span>
                    </div>
                </div>
                <div className={s.main}>
                    <div className={s.mainColumn}>
                        {NewMessageElement}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MyMessage;