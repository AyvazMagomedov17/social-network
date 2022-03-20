import { connect } from "react-redux"
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

const MessagesContainer = connect(mapStateToProps)(Messages)






export default MessagesContainer;