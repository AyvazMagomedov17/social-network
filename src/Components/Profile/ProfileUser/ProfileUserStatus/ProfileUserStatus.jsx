import React, { createRef, useRef } from 'react'
import s from '../ProfileUser.module.css'
const ProfileUserStatus = (props) => {
    const inputRef = useRef(null)
    return (
        <div className={s.ProfileUserStatus}>
            {!props.state.editMode && <div onDoubleClick={() => {
                props.activateEditMode()
            }} className={s.status} > {props.status || 'Change status'}</div>}
            {props.state.editMode && <div onBlur={() => {
                props.deactivateEditMode()
            }} className={s.status} > <input ref={inputRef} onChange={() => {
                props.onStatusChange(inputRef.current.value)
            }} autoFocus={true} type="text" value={props.state.status} /></div>}


        </div>
    )
}

export default ProfileUserStatus