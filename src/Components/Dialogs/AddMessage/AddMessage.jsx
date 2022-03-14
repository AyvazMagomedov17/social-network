import { useRef } from 'react'
import s from './AddMessage.module.css'



const AddMessage = (props) => {

    let newMessageElement = useRef(null)
    let addMessage = () => {
        props.addMessage()
    }

    let MessageChange = () => {
        let text = newMessageElement.current.value;
        props.changeMessage(text)
    }

    return (
        <div className={s.addMessage}>
            <div className={s.form}>

                <textarea onChange={MessageChange} ref={newMessageElement} value={props.newMessageTextarea} placeholder='Write your message' className={s.textarea}  ></textarea>
                <button onClick={addMessage} className={s.button}><img src="img/Dialogs/arrow.svg" alt="" /></button>

            </div>
        </div>
    )
}

export default AddMessage;