import ItemContainer from './Item/ItemContainer ';
import s from '../../Styles/WhoToFollow/whoToFollow.module.scss'


const WhoToFollow = (props) => {

    return (
        <div className={s.body}>
            <h3 className={s.title}>
                Who to Follow
            </h3>
            <ul className={s.list}>
                {props.usersData
                    .map((f) => {

                        if (f.followed === true) {
                            return <ItemContainer key={f.id} id={f.id} followed='Followed' img={f.photos.small != null ? f.photos.small : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} name={f.name} />

                        } else {
                            return <ItemContainer key={f.id} id={f.id} followed='Unfollowed' img={f.photos.small != null ? f.photos.small : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} name={f.name} />

                        }

                    })}


            </ul>
        </div>
    )
}

export default WhoToFollow;