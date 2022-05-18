

import { useRef, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Preloader from '../../common/Preloader/Preloader'
//@ts-ignore
import s from '../../../Styles/Profile/profileUser.module.scss'
import ProfileUserForm from './ProfileUserForm/ProfileUserForm'
import ProfileUserInfo from './ProfileUserInfo/ProfileUserInfo'
import { useDispatch } from 'react-redux'
import { savePhotoThunk, profileActions, toggleIsFollowUserThunk } from '../../../Redux/Profile-reducer'
import { ProfileType, UsersDataType } from '../../../Types/types'
import { followUnfollowThunk } from '../../../Redux/Friends-reducer'
import { dialogsApi } from '../../../Api/api'
import { getDialogsThunk, MessagesActions, startNewDialogThunk } from '../../../Redux/Messages-reducer'




type PropsType = {
    profile: any
    isOwner: boolean,
    updateProfileErrorMessage: string
    friendsData: UsersDataType[],
    isFollowedUser: boolean
}
const ProfileUser = ({ isFollowedUser, friendsData, profile, isOwner, updateProfileErrorMessage }: PropsType) => {
    let inputFile = useRef<any>(null)
    let params = useParams()
    let dispatch = useDispatch()
    const [editMode, seteditMode] = useState(false)
    dispatch(profileActions.setActualStringAC(params))
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = () => {

        if (inputFile.current.files.length) {
            dispatch(savePhotoThunk(inputFile.current.files[0])) // inputFile.current.files[0] выдаст нам файл который мы выбираем в input
            inputFile.current.files[0] = null
        }
    }

    const removeEditMode = () => {
        seteditMode(false)
    }
    const clickOnFollowButton = () => {
        dispatch(toggleIsFollowUserThunk(profile.userId))
    }
    const clickOnSendMessageButton = async () => {
        dispatch(startNewDialogThunk(profile.userId))

    }
    return (

        <div className={s.profileUser}>
            <div className={s.body}>
                <div className={s.left}>
                    <div className={s.avatar}>
                        <img src={profile.photos.large != null ? profile.photos.large : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" />
                    </div>
                    {isOwner && <div className={s.setPhotoBox}>
                        <input className={s.setPhotoInput} ref={inputFile} id='setPhotoInput' onChange={() => { onMainPhotoSelected() }} type="file" />
                        <label htmlFor="setPhotoInput"></label>
                    </div>}
                    {!isOwner && <><div className={s.firstButton}>
                        <NavLink onClick={clickOnSendMessageButton} to={`/messages/${profile.userId}`}><button className={s.message}>Send message</button></NavLink>
                    </div>
                        <button onClick={clickOnFollowButton} className={s.followed}>{isFollowedUser ? 'Followed' : 'Unfollowed'}</button></>}
                </div>
                {editMode ? <ProfileUserForm updateProfileErrorMessage={updateProfileErrorMessage} removeEditMode={removeEditMode} profile={profile} /> : <ProfileUserInfo goToEditMode={() => { seteditMode(true) }} isOwner={isOwner} profile={profile} />}
            </div>

        </div>
    )
}
export default ProfileUser