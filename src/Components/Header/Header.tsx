import { useSelector } from 'react-redux';

//@ts-ignore
import s from '../../Styles/Header/header.module.scss'
import Item from './Items/Item';
import Logo from './logo/Logo';

type PropsType = {
    isAuth: boolean
    login: string
    logoutThunk: () => void
}
const Header = ({ isAuth, logoutThunk, login }: PropsType) => {

    let logout = () => {
        logoutThunk()
    }

    return (
        <header className={s.header}>
            <div className={s.row}>
                <div className={s.left}><Logo /></div>
                <div className={s.right}>

                    <nav className={s.nav}>
                        <ul className={s.list}>
                            {isAuth ? <Item link='/profile' text={login} /> : <Item link='/login' text='Login' />}
                            <Item link='/friends' text='Friends' />
                            <Item link='/messages' text='Messages' />


                            {isAuth ? <Item link='#' logout={logout} text='Logout' /> : <></>}
                        </ul>
                    </nav>

                </div>

            </div>
        </header>
    )
}

export default Header;