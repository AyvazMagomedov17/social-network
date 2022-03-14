import Messages from "./Messages"

const MessagesContainer = (props) => {
    let state = props.store.getState().messagesPage

    let myMessageInfoData = state.myMessageInfo
    let yourMessageInfoData = state.yourMessageInfo
    let OneMessageData = state.MessageData










    return (

        <Messages store={props.store} myMessageInfoData={myMessageInfoData} yourMessageInfoData={yourMessageInfoData} OneMessageData={OneMessageData} />


    )

}



export default MessagesContainer;