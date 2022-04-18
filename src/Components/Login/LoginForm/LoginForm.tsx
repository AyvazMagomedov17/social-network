//@ts-ignore
import s from '../../../Styles/Login/loginForm.module.scss'
import { Formik } from 'formik';
import * as yup from 'yup'
import cn from 'classnames'

import { LoginFormPropsType } from '../Login';
import { FormEvent } from 'react';



const LoginForm = ({ loginThunk, errorMessage, captchaUrl }: LoginFormPropsType) => {

    const validationSheme = yup.object().shape({
        login: yup.string().typeError('Должно быть строкой').required('Required to fill'),
        password: yup.string().typeError('Должно быть строкой').required('Required to fill')
    })
    return (
        <div className={s.loginForm}>
            <h2 className={s.title}>Welcome, login to your account! </h2>
            <div className={s.form}>
                <Formik
                    initialValues={
                        {
                            login: '',
                            password: '',
                            rememberMe: true,
                            captcha: ''
                        }
                    }
                    validateOnBlur                     // ВАЛИДАЦИЯ ПРИ ПЕРЕХОДЕ НА ДРУГОЕ ПОЛЕ
                    onSubmit={(values) => {
                        debugger
                        loginThunk(values.login, values.password, values.rememberMe, values.captcha)
                    }}
                    validationSchema={validationSheme}


                >
                    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                        <div >
                            <div className={cn(s.password, s.inputBox)}>
                                <input placeholder='Login' className={cn(s.input, touched.login && errors.login ? s.errorBorder : null)} type={"email"} name={'login'} onChange={handleChange} onBlur={handleBlur} value={values.login} />
                                {touched.login && errors.login && <span className={s.error}>  {errors.login}</span>}
                            </div>

                            <div className={cn(s.password, s.inputBox)}>
                                <input placeholder='Password' onKeyDown={(e) => {
                                    if (e.keyCode === 13) {
                                        handleSubmit()

                                    }

                                }} className={cn(s.input, touched.password && errors.password ? s.errorBorder : null)} type={"password"} name={'password'} onChange={handleChange} onBlur={handleBlur} value={values.password} />
                                {touched.password && errors.password && <span className={s.error}> {errors.password}</span>}
                                {!errorMessage ? <></> : <span className={s.error}>{errorMessage}</span>}
                            </div>
                            <div className={s.checkboxBox}>
                                <input id='checkbox' className={s.checkbox} type="checkbox" onChange={handleChange} name={'rememberMe'} checked={values.rememberMe} />
                                <label htmlFor="checkbox"></label>
                                <span className={s.checkboxText}>Remember me</span>
                            </div>
                            <div className={s.captcha}>
                                {captchaUrl && <div>
                                    <img src={captchaUrl} />
                                    <input onKeyDown={(e) => {
                                        if (e.keyCode === 13) {
                                            handleSubmit()

                                        }

                                    }} placeholder='captcha' type="text" onChange={handleChange} name={'captcha'} value={values.captcha} />
                                </div>}

                            </div>
                            <button className={s.button} disabled={!isValid && !dirty} type={"submit"} onClick={(e: FormEvent) => {
                                handleSubmit()
                            }}>Login now</button>
                        </div>
                    )}

                </Formik>
            </div>
        </div>
    )

}

export default LoginForm