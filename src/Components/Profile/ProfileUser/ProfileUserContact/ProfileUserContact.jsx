import classNames from 'classnames'
import s from '../ProfileUser.module.css'


const ProfileUserContact = ({ contactsTitle, contactsValue }) => {

    return (
        <div className={classNames(s.facebook, s.itemContact)}><span className={s.contact}>{contactsTitle}</span> <a className={s.contactsLink} href={contactsValue}>{contactsValue}</a></div>)
}

export default ProfileUserContact