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
                            <Item text='Home' />
                            <Item text='Newsfeed' />
                            <Item text='Timeline' />
                            <Item text='All pages' />
                            <Item text='Contact' />
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    )
}

export default Header;