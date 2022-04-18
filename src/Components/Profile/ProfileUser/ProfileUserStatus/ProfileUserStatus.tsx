import React, { useEffect, useRef, useState } from 'react'
//@ts-ignore
import s from '../../../../Styles/Profile/profileUserStatus.module.scss'

type PropsType = {
    isOwner: boolean
    status: string
    updateStatusThunk: (s: string) => void
    editModeP?: boolean
}
const ProfileUserStatus = ({ isOwner, status, updateStatusThunk, editModeP = false }: PropsType) => {
    const inputRef = useRef<any>(null)
    let [editMode, setEditMode] = useState(editModeP || false)
    let [statusU, setStatus] = useState(status)


    let activateEditMode = () => {
        if (isOwner) {
            setEditMode(true)
        }

    }
    let deActivateEditMode = () => {
        setEditMode(false)
        updateStatusThunk(statusU)
    }
    let onStatusChange = () => {
        setStatus(inputRef.current.value)
    }

    useEffect(() => {
        setStatus(status)

    }, [status])
    return (
        <div className={s.ProfileUserStatus}>
            {!editMode && <div onClick={() => activateEditMode()} className={s.status} > <span>{status || (isOwner ? 'Change status' : 'No status')}</span></div>}
            {editMode && <div className={s.status} > <input onChange={onStatusChange} ref={inputRef} onBlur={deActivateEditMode} autoFocus={true} type="text" value={statusU} /></div>}


        </div>
    )
}






export default ProfileUserStatus