import OneMessage from '../OneMessage/OneMessage';
import s from './MyMessage.module.css'

const MyMessage = (props) => {





    return (
        <div className={s.message}>
            <div className={s.column}>
                <div className={s.rowReverse}>
                    <div className={s.profile}>
                        <div className={s.img}>
                            <img src="img/Dialogs/user1.jpg" alt="" /></div>
                        <span className={s.data}>{props.time}</span>
                        <span className={s.name}>{props.name}</span>

                    </div>
                </div>
                <div className={s.main}>
                    <div className={s.mainColumn}>
                        {props.NewMessageElement}
                        {props.notNewMessage}


                    </div>

                </div>
            </div>


        </div>
    )
}

export default MyMessage;