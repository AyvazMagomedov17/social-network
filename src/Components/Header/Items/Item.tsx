import { NavLink } from 'react-router-dom';
//@ts-ignore
import s from '../../../Styles/Header/item.module.scss'

type PropsType = {
    link: string
    text: string
    logout?: () => void
}
const Item = ({ link, logout, text, ...props }: PropsType) => {
    return (
        <li className={s.item}>
            <NavLink to={link} onClick={logout} {...props} className={s.link}>{text}</NavLink>
        </li>

    )
}

export default Item;