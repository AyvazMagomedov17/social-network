

import { connect } from 'react-redux'
import React, { Component } from 'react'
import { compose } from 'redux'
import { loginThunkCreator } from '../../Redux/Auth-reducer'
import Login from './Login'
import { Navigate } from 'react-router-dom'

class LoginContainer extends Component {
    render() {

        if (this.props.isAuth) {
            return <Navigate to='/profile' />
        }
        return (
            <Login {...this.props} loginThunk={this.props.loginThunk} />
        )
    }
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        errorMessage: state.auth.errorMessage
    }
}

export default compose(connect(mapStateToProps, {
    loginThunk: loginThunkCreator
}))(LoginContainer)