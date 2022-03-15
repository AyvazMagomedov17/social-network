
import { connect } from 'react-redux'
import { addMessageActionCreator, changeMessageTextareaActionCreator } from '../../../Redux/Messages-reducer'
import AddMessage from './AddMessage'


let mapStateToProps = (state) => {
    return {
        newMessageTextarea: state.messagesPage.newMessageTextarea
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        changeMessage: (text) => {
            dispatch(changeMessageTextareaActionCreator(text))
        }
    }
}

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage)
export default AddMessageContainer;