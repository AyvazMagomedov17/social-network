import s from './Item.module.css'


const Item = (props) => {
    const toggleFollows = (userId) => {
        debugger
        userId = props.id
        props.toggleFollows(userId)
    }
    return (
        <li className={s.item}>
            <div className={s.img}><img src={props.img} alt="people" /></div>

            <div className={s.body}>
                <span className={s.name}>{props.name}</span>
                <button onClick={toggleFollows} className={s.addFriend}>{props.followed}</button>
            </div>

        </li>
    )
}

export default Item;