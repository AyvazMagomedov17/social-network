
import classNames from 'classnames'
import { NavLink, useParams } from 'react-router-dom'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileUser.module.css'
import ProfileUserStatusContainer from './ProfileUserStatus/ProfileUserStatusContainer'

const ProfileUser = ({ setActualString, profile }) => {
    let params = useParams()

    setActualString(params)
    if (!profile) {
        return <Preloader />
    }
    let contactsArr = []
    let contacts = () => {
        if (profile.contacts.facebook != null) {
            contactsArr.push(<div className={classNames(s.facebook, s.itemContact)}><span className={s.contact}>Facebok:</span> <a className={s.contactsLink} href={profile.contacts.facebook}>{profile.contacts.facebook}</a></div>)
        }
        if (profile.contacts.website != null) {
            contactsArr.push(<div className={classNames(s.website, s.itemContact)}><span className={s.contact}>Website:</span> <a className={s.contactsLink} href={profile.contacts.website}>{profile.contacts.website}</a></div>)
        }
        if (profile.contacts.vk != null) {
            contactsArr.push(<div className={classNames(s.vk, s.itemContact)}><span className={s.contact}>Vk:</span> <a className={s.contactsLink} href={profile.contacts.vk}>{profile.contacts.vk}</a></div>)
        }
        if (profile.contacts.twitter != null) {
            contactsArr.push(<div className={classNames(s.twitter, s.itemContact)}><span className={s.contact}>Twitter:</span> <a className={s.contactsLink} href={profile.contacts.twitter}>{profile.contacts.twitter}</a></div>)
        }
        if (profile.contacts.instagram != null) {
            contactsArr.push(<div className={classNames(s.instagram, s.itemContact)}><span className={s.contact}>Instagram:</span> <a className={s.contactsLink} href={profile.contacts.instagram}>{profile.contacts.instagram}</a></div>)
        }
        if (profile.contacts.youtube != null) {
            contactsArr.push(<div className={classNames(s.youtube, s.itemContact)}><span className={s.contact}>Youtube:</span> <a className={s.contactsLink} href={profile.contacts.youtube}>{profile.contacts.youtube}</a></div>)
        }
        if (profile.contacts.github != null) {
            contactsArr.push(<div className={classNames(s.github, s.itemContact)}><span className={s.contact}>Github:</span> <a className={s.contactsLink} href={profile.contacts.github}>{profile.contacts.github}</a></div>)
        }
        if (profile.contacts.mainLink != null) {
            contactsArr.push(<div className={classNames(s.mainLink, s.itemContact)}><span className={s.contact}>MainLink:</span> <a className={s.contactsLink} href={profile.contacts.mainLink}>{profile.contacts.mainLink}</a></div>)
        }
        else {
            contactsArr.push(<div className={classNames(s.mainLink, s.itemContact)}><span className={s.contact}>Контактов нет</span> </div>)
        }
    }


    contacts()
    return (

        <div className={s.profileUser}>
            <div className={s.body}>
                <div className={s.left}>
                    <div className={s.avatar}>
                        <img src={profile.photos.large != null ? profile.photos.large : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" />
                    </div>
                    <div className={s.firstButton}>
                        <NavLink to={`/messages/${profile.userId}`}><button className={s.message}>Send message</button></NavLink>
                    </div>

                    <button className={s.followed}>Followed</button>
                </div>
                <div className={s.right}>
                    <div className={s.rightTop}>
                        <div className={s.fullName}>{profile.fullName}</div>
                        {profile.aboutMe}
                        <ProfileUserStatusContainer />
                    </div>
                    <div className={s.contacts}>
                        <div className={s.contactsTitle}>
                            Контакты:
                        </div>
                        <div>{contactsArr}</div>

                    </div>
                </div>
            </div>
        </div>
    )
}



export default ProfileUser