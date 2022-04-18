//@ts-ignore
import s from '../../../Styles/Navbar/account.module.scss'
import { ProfileType } from '../../../Types/types';

import Image from './Image/Image';
import Name from './Name/Name';

type PropsType = {
    profile: ProfileType
}
const Account = ({ profile }: any) => {

    if (!profile) {
        return <span>Loading</span>
    }
    return (
        <div className={s.account}>
            <div className={s.body}>
                <div className={s.row}>
                    <div className={s.left}>
                        <Image img={profile.photos.small != null ? profile.photos.small : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} />
                    </div>
                    <div className={s.right}>
                        <Name link={profile.userId} name={profile.fullName} status={profile.aboutMe} />

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Account;