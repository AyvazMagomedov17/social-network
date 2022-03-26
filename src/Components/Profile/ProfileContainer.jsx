import { Component } from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import Profile from "./Profile"


class ProfileContainer extends Component {
    render() {
        if (!this.props.isAuth) {
            return <Navigate to='/login' />
        }
        return (
            <div><Profile /></div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps)(ProfileContainer)