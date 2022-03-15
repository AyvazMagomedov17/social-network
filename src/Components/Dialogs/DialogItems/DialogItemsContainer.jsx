import { connect } from "react-redux";
import DialogItems from "./DialogItems";




let mapStateToProps = (state) => {
    return {
        dialogData: state.messagesPage.dialogData
    }
}


const DialogItemsContainer = connect(mapStateToProps)(DialogItems)

export default DialogItemsContainer;