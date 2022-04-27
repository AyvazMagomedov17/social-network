//@ts-ignore
import s from '../../../Styles/Header/logo.module.scss'
//@ts-ignore
import logoPNG from '../../../Assets/img/Navbar/Vector.svg'

const Logo = () => {
    return (

        <div className={s.logo}>
            <a href="#" className={s.link}><img src={logoPNG} alt="logo" className={s.img} /></a>
        </div>

    )
}

export default Logo;