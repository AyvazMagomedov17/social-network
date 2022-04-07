import Account from './Account/Account';
import AccountContainer from './Account/AccountContainer';
import Menu from './Menu/Menu';
import s from './Nav.module.css'

const Nav = (props) => {
    return (
        <div className={s.nav}>
            <AccountContainer />
            <Menu />
        </div>
    )
}

export default Nav;