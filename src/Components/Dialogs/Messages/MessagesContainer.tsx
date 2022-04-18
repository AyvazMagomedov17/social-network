
import { connect } from "react-redux"
import { compose } from "redux"
import { getAuthIdSelector, getAuthProfileSelecotr } from "../../../Redux/Selectors/AddPost-selector"
import { getMyMessageInfoDataSelector, getOneMessageDataSelector, getYourMessageInfoDataSelector } from "../../../Redux/Selectors/Messages-selector"
import { MessageDataType, MessageInfoType, ProfileType } from "../../../Types/types"
import { GetFuncForUseSelector } from "../../common/Functions/Functions"
import Messages from "./Messages"



const MessagesContainer = () => {
    const State = {
        myMessageInfoData: GetFuncForUseSelector(getMyMessageInfoDataSelector) as MessageInfoType,
        yourMessageInfoData: GetFuncForUseSelector(getYourMessageInfoDataSelector) as MessageInfoType,
        OneMessageData: GetFuncForUseSelector(getOneMessageDataSelector) as Array<MessageDataType>,
        id: GetFuncForUseSelector(getAuthIdSelector) as number | null,
        profile: GetFuncForUseSelector(getAuthProfileSelecotr) as ProfileType
    }

    return (
        <Messages {...State} />
    )
}


export default MessagesContainer