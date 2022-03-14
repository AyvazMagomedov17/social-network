import s from './Item.module.css'

const Item = (props) => {
    return (
        <li className={s.item}>
            <a className={s.link} href="#">{props.text}</a>
        </li>

    )
}

export default Item;