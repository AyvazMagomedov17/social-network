
import ProfileUserContact from '../ProfileUserContact/ProfileUserContact'
import s from '../ProfileUser.module.css'
import ProfileUserStatusContainer from '../ProfileUserStatus/ProfileUserStatusContainer'

const ProfileUserInfo = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div className={s.right}>
            <div className={s.rightTop}>
                <div className={s.fullName}>{profile.fullName}</div>
                <div className={s.aboutMe}>{profile.aboutMe}</div>
                <div className={s.lookingForAJob}>Looking For A Job: {profile.lookingForAJob ? 'yes' : 'no'}</div>
                <div className={s.lookingForAJobDescription}>Looking For a Job Description: {profile.lookingForAJobDescription}</div>
                <ProfileUserStatusContainer />
            </div>
            <div className={s.contacts}>
                <div className={s.contactsTitle}>
                    Контакты:
                </div>
                <div>{Object.keys(profile.contacts).map(key => {

                    return <ProfileUserContact contactsTitle={key} contactsValue={profile.contacts[key]} />
                })}</div>

            </div>
            {isOwner && <button onClick={() => {
                goToEditMode()
            }}>Edit</button>}
        </div>
    )
}

export default ProfileUserInfo