
import { connect } from 'react-redux'
import { addMessageActionCreator, changeMessageTextareaActionCreator } from '../../../Redux/Messages-reducer'
import AddMessage from './AddMessage'


let mapStateToProps = (state) => {
    return {
        newMessageTextarea: state.messagesPage.newMessageTextarea
    }
}



const AddMessageContainer = connect(mapStateToProps, {
    addMessage: addMessageActionCreator,
    changeMessage: changeMessageTextareaActionCreator
})(AddMessage)
export default AddMessageContainer;