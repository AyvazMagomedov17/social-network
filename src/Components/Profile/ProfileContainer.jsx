import { Component } from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { compose } from "redux"
import withAuthRedirect from "../../Hoc/withAuthRedirect"

import Profile from "./Profile"


class ProfileContainer extends Component {

    render() {
        return (
            <div><Profile /></div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        nothing: 0
    }
}


export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(ProfileContainer)