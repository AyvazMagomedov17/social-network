import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Form from './form/Form';
import s from './Header.module.css'
import Item from './Items/Item';
import Logo from './logo/Logo';

const Header = (props) => {
    let isAuth = useSelector(state => state.auth.isAuth)
    let ha = () => {
        props.logoutThunk()
    }
    return (
        <header className={s.header}>
            <div className={s.row}>
                <div className={s.left}><Logo /></div>
                <div className={s.right}>
                    <Form />
                    <nav className={s.nav}>
                        <ul className={s.list}>
                            <Item link='/login' text='Home' />
                            <Item link='/login' text='Newsfeed' />
                            <Item link='/login' text='Timeline' />
                            <Item link='/login' text='All pages' />
                            <Item link='/login' text='Contact' />
                            {isAuth ? <Item link='#' text={props.login} /> : <Item link='/login' text='Login' />}
                            {props.isAuth ? <Item link='#' logout={ha} text='Logout' /> : <></>}
                        </ul>
                    </nav>

                </div>

            </div>
        </header>
    )
}

export default Header;