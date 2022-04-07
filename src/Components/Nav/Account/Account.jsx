import Preloader from '../../common/Preloader/Preloader';
import s from './Account.module.css'
import Followers from './Followers/Followers';
import Image from './Image/Image';
import Name from './Name/Name';

const Account = (props) => {

    if (!props.profile) {
        return <span>Loading</span>
    }
    return (
        <div className={s.account}>
            <div className={s.body}>
                <div className={s.row}>
                    <div className={s.left}>
                        <Image img={props.profile.photos.small != null ? props.profile.photos.small : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} />
                    </div>
                    <div className={s.right}>
                        <Name link='#' name={props.profile.fullName} />
                        <Followers link='#' count='1372' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Account;