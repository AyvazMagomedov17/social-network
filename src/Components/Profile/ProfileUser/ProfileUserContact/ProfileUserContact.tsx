import classNames from 'classnames'
//@ts-ignore
import s from '../../../../Styles/Profile/profileUserContact.module.scss'

type PropsType = {
    contactsTitle: string
    contactsValue: string
}
const ProfileUserContact = ({ contactsTitle, contactsValue }: PropsType) => {

    return (
        <div className={classNames(s.facebook, s.itemContact)}><span className={s.contact}>{contactsTitle}:</span> <a className={s.contactsLink} href={contactsValue}>{contactsValue}</a></div>)
}

export default ProfileUserContact