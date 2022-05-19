
import { connect, useDispatch } from 'react-redux'
import React, { Component, useEffect } from 'react'
import { compose } from 'redux'
import { loginThunk } from '../../Redux/Auth-reducer'
import Login from './Login'
import { Navigate } from 'react-router-dom'
import { getErrorMessageSelector, getChotoSuperSelector, getCaptchaUrlSelector } from '../../Redux/Selectors/Login-selectors'
import { GetFuncForUseSelector } from '../common/Functions/Functions'
import { stateType } from '../../Redux/Redux-store'
import { string } from 'yup'

let LoginContainer = (props: any) => {
    let StateProps = {
        isAuth: GetFuncForUseSelector(getChotoSuperSelector) as boolean,
        errorMessage: GetFuncForUseSelector(getErrorMessageSelector) as string,
        captchaUrl: GetFuncForUseSelector(getCaptchaUrlSelector) as string

    }
    let dispatch = useDispatch()
    let loginThunkk = (email: string, password: string, rememberMe: boolean, captcha: string) => {
        dispatch(loginThunk(email, password, rememberMe, captcha))
    }
    const lockScrol = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        window.addEventListener('scroll', lockScrol);
        return function () {
            window.removeEventListener('scroll', lockScrol)
        }
    }, [])
    if (props.isAuth) {
        return <Navigate to='/profile' />
    }


    return (
        <Login {...props} loginThunk={loginThunkk} />
    )

}
let mapStateToProps = (state: stateType) => {
    return {
        isAuth: getChotoSuperSelector(state),
        errorMessage: getErrorMessageSelector(state),
        captchaUrl: getCaptchaUrlSelector(state)
    }
}

export default compose(connect(mapStateToProps, {
    loginThunk: loginThunk
}))(LoginContainer)