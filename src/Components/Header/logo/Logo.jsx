import s from './Logo.module.css'

const Logo = (props) => {
    return (

        <div className={s.logo}>
            <a href="#" className={s.link}><img src="img/Header/logo.png" alt="logo" className={s.img} /></a>
        </div>

    )
}

export default Logo;