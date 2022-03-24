import { NavLink } from 'react-router-dom';
import s from './Item.module.css'

const Item = (props) => {
    return (
        <li className={s.item}>
            <NavLink to={props.link} className={s.link}>{props.text}</NavLink>
        </li>

    )
}

export default Item;