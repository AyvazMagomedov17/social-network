import { connect } from "react-redux";
import { compose } from "redux";
import DialogItems from "./DialogItems";




let mapStateToProps = (state) => {
    return {
        dialogData: state.messagesPage.dialogData
    }
}



export default compose(connect(mapStateToProps))(DialogItems);