
import { connect } from 'react-redux'
import { compose } from 'redux'
import { addMessageAC } from '../../../Redux/Messages-reducer'
import AddMessage from './AddMessage'




export default compose(connect(null, {
    addMessage: addMessageAC,

}))(AddMessage);