import React from 'react'


import s from './Login.module.css'
import LoginForm from './LoginForm/LoginForm'



const Login = (props) => {
    return (

        <div className={s.Login}>
            <h3 className={s.title}>LOGIN</h3>
            <LoginForm {...props} loginThunk={props.loginThunk} />

        </div>
    )
}

export default Login