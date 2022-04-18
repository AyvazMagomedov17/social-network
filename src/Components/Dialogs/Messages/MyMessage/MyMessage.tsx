//@ts-ignore
import s from '../../../../Styles/Dialogs/myMessage.module.scss'
import { YourMessageMyMessagePropsType } from '../YourMessage/YourMessage';

const MyMessage = ({ time, name, NewMessageElement, img }: YourMessageMyMessagePropsType) => {
    return (
        <div className={s.message}>
            <div className={s.column}>
                <div className={s.rowReverse}>
                    <div className={s.profile}>
                        <div className={s.img}>
                            <img src={img} alt="" /></div>
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