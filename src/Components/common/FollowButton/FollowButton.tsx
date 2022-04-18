import { debug } from 'console'
import React from 'react'
//@ts-ignore
import s from './FollowButton.module.scss'
type PropsType = {
    children: string
    className: any
    disabled: boolean
    onClick: () => void

}

const FollowButton = ({ children, disabled, ...props }: PropsType) => {

    if (children === 'unfollowed' || children === 'Unfollowed') {
        return <button disabled={disabled} {...props} className={s.unfolButton}>{children}</button>
    } else {
        return (
            <button {...props} disabled={disabled} className={s.button}>
                {children}
            </button>
        )
    }
}

export default FollowButton