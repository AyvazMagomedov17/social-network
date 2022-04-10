
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { compose } from 'redux'
import { loginThunk } from '../../Redux/Auth-reducer.ts'
import Login from './Login'
import { Navigate } from 'react-router-dom'
import { getErrorMessageSelector, getChotoSuperSelector, getCaptchaUrlSelector } from '../../Redux/Selectors/Login-selectors'

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
        isAuth: getChotoSuperSelector(state),
        errorMessage: getErrorMessageSelector(state),
        captchaUrl: getCaptchaUrlSelector(state)
    }
}

export default compose(connect(mapStateToProps, {
    loginThunk: loginThunk
}))(LoginContainer)