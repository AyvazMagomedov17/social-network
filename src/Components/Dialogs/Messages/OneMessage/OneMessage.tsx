//@ts-ignore
import s from '../../../../Styles/Dialogs/oneMessage.module.scss'

const OneMessage = ({ message }: { message: string }) => {
    return (
        <p className={s.message}>
            {message}
        </p>
    )
}

export default OneMessage;