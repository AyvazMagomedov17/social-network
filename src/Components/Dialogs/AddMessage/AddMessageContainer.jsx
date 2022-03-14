
import { addMessageActionCreator, changeMessageTextareaActionCreator } from '../../../Redux/Messages-reducer'
import AddMessage from './AddMessage'

const AddMessageContainer = (props) => {
    let state = props.store.getState().messagesPage


    let onAddMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (text) => {
        props.store.dispatch(changeMessageTextareaActionCreator(text))
    }

    return (
        <AddMessage newMessageTextarea={state.newMessageTextarea} addMessage={onAddMessage} changeMessage={onMessageChange} />
    )
}

export default AddMessageContainer;