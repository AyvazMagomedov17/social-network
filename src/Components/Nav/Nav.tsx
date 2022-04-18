
import AccountContainer from './Account/AccountContainer';
import Menu from './Menu/Menu';
//@ts-ignore
import s from '../../Styles/Navbar/nav.module.scss'
import Logo from './Logo/Logo';


const Nav = () => {
    return (
        <div className={s.nav}>
            <Logo />
            <Menu />
            <AccountContainer />
        </div>
    )
}

export default Nav;