import s from './OneMessage.module.css'

const OneMessage = (props) => {
    return (
        <p className={s.message}>
            {props.message}
        </p>
    )
}

export default OneMessage;