

//@ts-ignore
import s from '../../Styles/Login/login.module.scss'
import LoginForm from './LoginForm/LoginForm'
//@ts-ignore
import mainImg from '../../Assets/img/Login/main.jpg'
//@ts-ignore
import logoImg from '../../Assets/img/Login/logo.svg'

export type LoginFormPropsType = {
    isAuth?: boolean,
    errorMessage: string,
    captchaUrl: string
    loginThunk: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
const Login = ({ isAuth, errorMessage, captchaUrl, loginThunk }: LoginFormPropsType) => {
    return (

        <div className={s.Login}>
            <div className={s.body}>
                <div className={s.left}>
                    <div className={s.mainImg}>
                        <img src={mainImg} alt="" />
                    </div>
                </div>
                <div className={s.right}>
                    <div className={s.logoImg}><img src={logoImg} alt="" /></div>
                    <LoginForm captchaUrl={captchaUrl} errorMessage={errorMessage} loginThunk={loginThunk} />
                </div>
            </div>


        </div>
    )
}

export default Login