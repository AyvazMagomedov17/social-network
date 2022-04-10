import React from 'react'
import s from '../Login.module.css'
import { Formik } from 'formik';
import * as yup from 'yup'
import cn from 'classnames';


const LoginForm = ({ loginThunk, errorMessage, captchaUrl }) => {

    const validationSheme = yup.object().shape({
        login: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательно')
    })
    return (
        <Formik Formik
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

                loginThunk(values.login, values.password, values.rememberMe, values.captcha)
            }}
            validationSchema={validationSheme}


        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <div className={s.form}>
                    <div className={s.login}>
                        <input className={s.input} type={"email"} name={'login'} onChange={handleChange} onBlur={handleBlur} value={values.login} />
                        {touched.login && errors.login && <p> Ошибка: {errors.login}</p>}
                    </div>

                    <div className={s.password}>
                        <input onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                                handleSubmit()

                            }

                        }} className={s.input} type={"password"} name={'password'} onChange={handleChange} onBlur={handleBlur} value={values.password} />
                        {touched.password && errors.password && <p> Ошибка: {errors.password}</p>}
                        {!errorMessage ? <></> : <div>{errorMessage}</div>}
                    </div>
                    <div>
                        <input type="checkbox" onChange={handleChange} name={'rememberMe'} checked={values.rememberMe} />
                        <span>Запомнить меня</span>
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
                    <button disabled={!isValid && !dirty} type={"submit"} onClick={handleSubmit}>Login</button>
                </div>
            )}

        </Formik>)


}

export default LoginForm