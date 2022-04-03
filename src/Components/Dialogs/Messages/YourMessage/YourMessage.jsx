import OneMessage from '../OneMessage/OneMessage';
import s from './YourMessage.module.css'

const YourMessage = ({ time, name, NewMessageElement }) => {
    return (
        <div className={s.message}>
            <div className={s.column}>
                <div className={s.rowReverse}>
                    <div className={s.profile}>
                        <div className={s.img}>
                            <img src="./img/Dialogs/user2.jpg" alt="" /></div>
                        <span className={s.data}>{time}</span>
                        <span className={s.name}>{name} </span>

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

export default YourMessage;