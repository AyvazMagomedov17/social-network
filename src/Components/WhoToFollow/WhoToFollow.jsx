import Item from './Item/Item';
import s from './WhoToFollow.module.css'
let itemImg = 'img/whoToFollowItem/'

const WhoToFollow = (props) => {
    return (
        <div className={s.body}>
            <h3 className={s.title}>
                Who to Follow
            </h3>
            <ul className={s.list}>
                <Item img={`${itemImg}user1.jpg`} name='Diana Amber' />
                <Item img={`${itemImg}user2.jpg`} name='Chris Harts' />
                <Item img={`${itemImg}user3.jpg`} name='Ilon Mask' />

            </ul>
        </div>
    )
}

export default WhoToFollow;