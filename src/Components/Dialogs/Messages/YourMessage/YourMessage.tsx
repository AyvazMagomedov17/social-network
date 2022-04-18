//@ts-ignore
import s from '../../../../Styles/Dialogs/yourMessage.module.scss'

export type YourMessageMyMessagePropsType = {
    time: string
    name: string
    NewMessageElement: any,
    img?: string
}
const YourMessage = ({ time, name, NewMessageElement }: YourMessageMyMessagePropsType) => {
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