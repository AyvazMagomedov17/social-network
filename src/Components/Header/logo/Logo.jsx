import s from './Logo.module.css'
import logoPNG from '../../../Assets/img/Header/logo.png'

const Logo = (props) => {
    return (

        <div className={s.logo}>
            <a href="#" className={s.link}><img src={logoPNG} alt="logo" className={s.img} /></a>
        </div>

    )
}

export default Logo;