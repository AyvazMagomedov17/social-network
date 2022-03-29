
import { connect } from 'react-redux'
import { compose } from 'redux'
import { addMessageActionCreator, changeMessageTextareaActionCreator } from '../../../Redux/Messages-reducer'
import AddMessage from './AddMessage'


let mapStateToProps = (state) => {
    return {
        newMessageTextarea: state.messagesPage.newMessageTextarea
    }
}





export default compose(connect(mapStateToProps, {
    addMessage: addMessageActionCreator,
    changeMessage: changeMessageTextareaActionCreator
}))(AddMessage);