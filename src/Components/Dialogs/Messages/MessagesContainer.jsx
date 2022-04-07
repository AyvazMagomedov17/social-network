import { useEffect } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { getProfileThunk } from "../../../Redux/Profile-reducer"
import { getMyMessageInfoDataSelector, getMyProfileImgSelector, getOneMessageDataSelector, getYourMessageInfoDataSelector } from "../../../Redux/Selectors/Messages-selector"
import Messages from "./Messages"



const MessagesContainer = (props) => {


    return (
        <Messages {...props} />
    )
}


let mapStateToProps = (state) => {

    return {
        myMessageInfoData: getMyMessageInfoDataSelector(state),
        yourMessageInfoData: getYourMessageInfoDataSelector(state),
        OneMessageData: getOneMessageDataSelector(state),
        id: state.auth.id,
        profile: state.auth.authProfile


    }
}








export default compose(connect(mapStateToProps))(MessagesContainer);