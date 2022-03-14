import { NavLink } from 'react-router-dom';
import s from './Menu.module.css'

const Menu = (props) => {
    return (
        <nav className={s.menu}>
            <ul className={s.list}>
                <li className={s.menuItem}><NavLink to="/profile" className={s.menuLink}>My Newsfeed</NavLink></li>
                <li className={s.menuItem}><NavLink to="/music" className={s.menuLink}>Music</NavLink></li>
                <li className={s.menuItem}><NavLink to="/friends" className={s.menuLink}>Friends</NavLink></li>
                <li className={s.menuItem}><NavLink to="/messages" className={s.menuLink}>Messages</NavLink></li>
                <li className={s.menuItem}><NavLink to="/images" className={s.menuLink}>Images</NavLink></li>
                <li className={s.menuItem}><NavLink to="/videos" className={s.menuLink}>Videos</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu;