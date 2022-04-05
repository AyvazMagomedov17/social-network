import { Component } from "react"
import { connect } from "react-redux"
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

export default compose(
    connect(null),
    withAuthRedirect
)(ProfileContainer)