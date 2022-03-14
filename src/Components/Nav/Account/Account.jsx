import s from './Account.module.css'
import Followers from './Followers/Followers';
import Image from './Image/Image';
import Name from './Name/Name';

const Account = (props) => {
    return (
        <div className={s.account}>
            <div className={s.body}>
                <div className={s.row}>
                    <div className={s.left}>
                        <Image img='/img/whoToFollowItem/user1.jpg' />
                    </div>
                    <div className={s.right}>
                        <Name link='#' name='Sarah Chruz' />
                        <Followers link='#' count='1372' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Account;