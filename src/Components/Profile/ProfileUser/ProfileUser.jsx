
import classNames from 'classnames'
import { useRef, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileUser.module.css'
import ProfileUserForm from './ProfileUserForm/ProfileUserForm'
import ProfileUserInfo from './ProfileUserInfo/ProfileUserInfo'
import ProfileUserStatusContainer from './ProfileUserStatus/ProfileUserStatusContainer'




const ProfileUser = ({ setActualString, profile, isOwner, savePhotoThunk, updateProfileThunk, updateProfileErrorMessage }) => {
    let inputFile = useRef(null)
    let params = useParams()
    const [editMode, seteditMode] = useState(false)
    setActualString(params)
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = () => {
        if (inputFile.current.files.length) {
            savePhotoThunk(inputFile.current.files[0])     // inputFile.current.files[0] выдаст нам файл который мы выбираем в input
            inputFile.current.files[0] = null
        }
    }

    const removeEditMode = () => {
        seteditMode(false)
    }

    return (

        <div className={s.profileUser}>
            <div className={s.body}>
                <div className={s.left}>
                    <div className={s.avatar}>
                        <img src={profile.photos.large != null ? profile.photos.large : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" />
                    </div>
                    {isOwner && <input ref={inputFile} onChange={() => { onMainPhotoSelected() }} type="file" />}
                    <div className={s.firstButton}>
                        <NavLink to={`/messages/${profile.userId}`}><button className={s.message}>Send message</button></NavLink>
                    </div>

                    <button className={s.followed}>Followed</button>
                </div>
                {editMode ? <ProfileUserForm updateProfileErrorMessage={updateProfileErrorMessage} updateProfileThunk={updateProfileThunk} removeEditMode={removeEditMode} profile={profile} /> : <ProfileUserInfo goToEditMode={() => { seteditMode(true) }} isOwner={isOwner} profile={profile} />}
            </div>
        </div>
    )
}




export default ProfileUser