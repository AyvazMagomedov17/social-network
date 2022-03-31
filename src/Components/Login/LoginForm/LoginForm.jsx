import React from 'react'
import s from '../Login.module.css'
import { Formik } from 'formik';
import * as yup from 'yup'

const LoginForm = (props) => {
    const validationSheme = yup.object().shape({
        login: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательно')
    })
    return (
        <Formik Formik
            initialValues={
                {
                    login: '',
                    password: ''
                }
            }
            validateOnBlur                     // ВАЛИДАЦИЯ ПРИ ПЕРЕХОДЕ НА ДРУГОЕ ПОЛЕ
            onSubmit={(values) => console.log(values.login, values.password)}
            validationSchema={validationSheme}
        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <div className={s.form}>
                    <div className={s.login}>
                        <input className={s.input} type={"email"} name={'login'} onChange={handleChange} onBlur={handleBlur} value={values.login} />
                        {touched.login && errors.login && <p> Ошибка: {errors.login}</p>}
                    </div>

                    <div className={s.password}>
                        <input className={s.input} type={"password"} name={'password'} onChange={handleChange} onBlur={handleBlur} value={values.password} />
                        {touched.password && errors.password && <p> Ошибка: {errors.password}</p>}
                    </div>

                    <button disabled={!isValid && !dirty} type={"submit"} onClick={handleSubmit}>Login</button>
                </div>
            )}

        </Formik>)


}

export default LoginForm