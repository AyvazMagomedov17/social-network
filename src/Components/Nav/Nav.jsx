import Account from './Account/Account';
import Menu from './Menu/Menu';
import s from './Nav.module.css'

const Nav = (props) => {
    return (
        <div className={s.nav}>
            <Account />
            <Menu />
        </div>
    )
}

export default Nav;