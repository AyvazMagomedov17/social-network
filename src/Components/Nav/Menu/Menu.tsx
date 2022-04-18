import { NavLink } from 'react-router-dom';
//@ts-ignore
import s from '../../../Styles/Navbar/menu.module.scss'
//@ts-ignore
import profilePhoto from '../../../Assets/img/Navbar/home.svg'
//@ts-ignore
import friendsPhoto from '../../../Assets/img/Navbar/friends.svg'
//@ts-ignore
import messagesPhoto from '../../../Assets/img/Navbar/messages.svg'

const Menu = () => {
    return (
        <nav className={s.menu}>
            <ul className={s.list}>
                <li className={s.menuItem}><img src={profilePhoto} alt="" /><NavLink to="/profile" className={s.menuLink}>Profile</NavLink></li>
                <li className={s.menuItem}><img src={friendsPhoto} alt="" /><NavLink to="/friends" className={s.menuLink}>Friends</NavLink></li>
                <li className={s.menuItem}><img src={messagesPhoto} alt="" /><NavLink to="/messages" className={s.menuLink}>Messages</NavLink></li>

            </ul>
        </nav>
    )
}

export default Menu;