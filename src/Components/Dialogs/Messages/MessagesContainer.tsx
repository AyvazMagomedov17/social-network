
import { connect, useSelector } from "react-redux"
import { compose } from "redux"
import { getAuthIdSelector, getAuthProfileSelecotr } from "../../../Redux/Selectors/AddPost-selector"
import { getTotalMessagesCountSelector } from "../../../Redux/Selectors/Messages-selector"
import { MessageDataType, MessageInfoType, ProfileType } from "../../../Types/types"
import { GetFuncForUseSelector } from "../../common/Functions/Functions"
import Messages from "./Messages"



const MessagesContainer = () => {
    const State = {

        id: GetFuncForUseSelector(getAuthIdSelector) as number | null,
        profile: GetFuncForUseSelector(getAuthProfileSelecotr) as ProfileType,
        totalMessagesCount: useSelector(getTotalMessagesCountSelector) as number

    }

    return (
        <Messages {...State} />
    )
}


export default MessagesContainer