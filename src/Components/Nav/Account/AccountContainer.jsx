import { useEffect } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { getProfileThunk } from "../../../Redux/Profile-reducer.ts"
import Account from "./Account"



const AccountContainer = ({ profile }) => {


    return (
        <Account profile={profile} />
    )
}


let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        profile: state.auth.authProfile
    }
}


export default compose(connect(mapStateToProps, {
    getProfile: getProfileThunk
}))(AccountContainer)