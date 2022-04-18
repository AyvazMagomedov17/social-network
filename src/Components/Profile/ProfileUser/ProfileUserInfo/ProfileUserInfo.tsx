
import ProfileUserContact from '../ProfileUserContact/ProfileUserContact'
//@ts-ignore
import s from '../../../../Styles/Profile/profileUserInfo.module.scss'
import ProfileUserStatusContainer from '../ProfileUserStatus/ProfileUserStatusContainer'


type PropsType = {
    profile: any
    isOwner: boolean
    goToEditMode: () => void
}
const ProfileUserInfo = ({ profile, isOwner, goToEditMode }: PropsType) => {
    return (
        <div className={s.right}>
            <div className={s.rightTop}>
                <div className={s.fullName}>{profile.fullName}</div>
                <div className={s.aboutMe}>{profile.aboutMe}</div>
                <ProfileUserStatusContainer isOwner={isOwner} />
                <div className={s.lookingForAJoBox}>
                    <div className={s.lookingForAJob}>Looking For A Job: {profile.lookingForAJob ? 'yes' : 'no'}</div>
                    <div className={s.lookingForAJobDescription}>{profile.lookingForAJobDescription}</div>
                </div>


                {isOwner && <button className={s.editButton} onClick={() => {
                    goToEditMode()
                }}>Edit</button>}
            </div>
            <div className={s.contacts}>
                <div className={s.contactsTitle}>
                    Контакты:
                </div>
                <div>{Object.keys(profile.contacts).map(key => {

                    return <ProfileUserContact contactsTitle={key} contactsValue={profile.contacts[key]} />
                })}</div>

            </div>

        </div>
    )
}

export default ProfileUserInfo