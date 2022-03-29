
import classNames from 'classnames'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileUser.module.css'
import ProfileUserStatus from './ProfileUserStatus/ProfileUserStatusContainer'
const ProfileUser = props => {
    let params = useParams()
    props.setActualString(params)
    if (!props.profile) {
        return <Preloader />
    }
    let contactsArr = []
    let contacts = () => {
        if (props.profile.contacts.facebook != null) {
            contactsArr.push(<div className={classNames(s.facebook, s.itemContact)}><span className={s.contact}>Facebok:</span> <a className={s.contactsLink} href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></div>)
        }
        if (props.profile.contacts.website != null) {
            contactsArr.push(<div className={classNames(s.website, s.itemContact)}><span className={s.contact}>Website:</span> <a className={s.contactsLink} href={props.profile.contacts.website}>{props.profile.contacts.website}</a></div>)
        }
        if (props.profile.contacts.vk != null) {
            contactsArr.push(<div className={classNames(s.vk, s.itemContact)}><span className={s.contact}>Vk:</span> <a className={s.contactsLink} href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></div>)
        }
        if (props.profile.contacts.twitter != null) {
            contactsArr.push(<div className={classNames(s.twitter, s.itemContact)}><span className={s.contact}>Twitter:</span> <a className={s.contactsLink} href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a></div>)
        }
        if (props.profile.contacts.instagram != null) {
            contactsArr.push(<div className={classNames(s.instagram, s.itemContact)}><span className={s.contact}>Instagram:</span> <a className={s.contactsLink} href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a></div>)
        }
        if (props.profile.contacts.youtube != null) {
            contactsArr.push(<div className={classNames(s.youtube, s.itemContact)}><span className={s.contact}>Youtube:</span> <a className={s.contactsLink} href={props.profile.contacts.youtube}>{props.profile.contacts.youtube}</a></div>)
        }
        if (props.profile.contacts.github != null) {
            contactsArr.push(<div className={classNames(s.github, s.itemContact)}><span className={s.contact}>Github:</span> <a className={s.contactsLink} href={props.profile.contacts.github}>{props.profile.contacts.github}</a></div>)
        }
        if (props.profile.contacts.mainLink != null) {
            contactsArr.push(<div className={classNames(s.mainLink, s.itemContact)}><span className={s.contact}>MainLink:</span> <a className={s.contactsLink} href={props.profile.contacts.mainLink}>{props.profile.contacts.mainLink}</a></div>)
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
                        <img src={props.profile.photos.large != null ? props.profile.photos.large : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" />
                    </div>
                    <div className={s.firstButton}>
                        <NavLink to={`/messages/${props.profile.userId}`}><button className={s.message}>Send message</button></NavLink>
                    </div>

                    <button className={s.followed}>Followed</button>
                </div>
                <div className={s.right}>
                    <div className={s.rightTop}>
                        <div className={s.fullName}>{props.profile.fullName}</div>
                        {props.profile.aboutMe}
                        <ProfileUserStatus />
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