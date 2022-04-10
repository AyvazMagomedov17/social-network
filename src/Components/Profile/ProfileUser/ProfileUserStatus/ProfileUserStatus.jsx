import React, { useEffect, useRef, useState } from 'react'
import s from '../ProfileUser.module.css'

const ProfileUserStatus = (props) => {
    const inputRef = useRef(null)
    let [editMode, setEditMode] = useState(props.editMode || false)
    let [status, setStatus] = useState(props.status)


    let activateEditMode = () => {
        if (props.isOwner) {
            setEditMode(true)
        }

    }
    let deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatusThunk(status)
    }
    let onStatusChange = () => {
        setStatus(inputRef.current.value)
    }

    useEffect(() => {
        setStatus(props.status)

    }, [props.status])
    return (
        <div className={s.ProfileUserStatus}>
            {!editMode && <div onDoubleClick={() => activateEditMode()} className={s.status} > {props.status || (props.isOwner ? 'Change status' : 'No status')}</div>}
            {editMode && <div className={s.status} > <input onChange={onStatusChange} ref={inputRef} onBlur={deActivateEditMode} autoFocus={true} type="text" value={status} /></div>}


        </div>
    )
}






export default ProfileUserStatus