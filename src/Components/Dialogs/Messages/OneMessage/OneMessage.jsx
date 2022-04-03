import s from './OneMessage.module.css'

const OneMessage = ({ message }) => {
    return (
        <p className={s.message}>
            {message}
        </p>
    )
}

export default OneMessage;