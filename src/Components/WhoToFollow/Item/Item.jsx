import s from './Item.module.css'


const Item = (props) => {
    return (
        <li className={s.item}>
            <div className={s.img}><img src={props.img} alt="people" /></div>

            <div className={s.body}>
                <span className={s.name}>{props.name}</span>
                <a href='#' className={s.addFriend}>Add friend</a>
            </div>

        </li>
    )
}

export default Item;