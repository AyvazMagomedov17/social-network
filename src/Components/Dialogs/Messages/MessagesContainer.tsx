
import { connect } from "react-redux"
import { compose } from "redux"
import { getAuthIdSelector, getAuthProfileSelecotr } from "../../../Redux/Selectors/AddPost-selector"
import { MessageDataType, MessageInfoType, ProfileType } from "../../../Types/types"
import { GetFuncForUseSelector } from "../../common/Functions/Functions"
import Messages from "./Messages"



const MessagesContainer = () => {
    const State = {

        id: GetFuncForUseSelector(getAuthIdSelector) as number | null,
        profile: GetFuncForUseSelector(getAuthProfileSelecotr) as ProfileType
    }

    return (
        <Messages {...State} />
    )
}


export default MessagesContainer