import { connect } from "react-redux"
import { compose } from "redux"
import Messages from "./Messages"






let mapStateToProps = (state) => {
    let myMessageInfoData = state.messagesPage.myMessageInfo
    let yourMessageInfoData = state.messagesPage.yourMessageInfo
    let OneMessageData = state.messagesPage.MessageData
    return {
        myMessageInfoData: myMessageInfoData,
        yourMessageInfoData: yourMessageInfoData,
        OneMessageData: OneMessageData
    }
}








export default compose(connect(mapStateToProps))(Messages);