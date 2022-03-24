import { NavLink } from 'react-router-dom';
import Form from './form/Form';
import s from './Header.module.css'
import Item from './Items/Item';
import Logo from './logo/Logo';

const Header = (props) => {
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
                            {props.isAuth ? <Item link='#' text={props.login} /> : <Item link='/login' text='Login' />}
                        </ul>
                    </nav>

                </div>

            </div>
        </header>
    )
}

export default Header;