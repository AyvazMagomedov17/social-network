//@ts-ignore
import s from '../../../../Styles/Profile/profileUserForm.module.scss'
import ProfileUserStatusContainer from '../ProfileUserStatus/ProfileUserStatusContainer'
import { Formik } from 'formik'

import cn from 'classnames'
import { useState } from 'react'
import { updateProfileThunk } from '../../../../Redux/Profile-reducer'
import { useDispatch } from 'react-redux'



type PropsType = {
    profile: any
    removeEditMode: () => void
    updateProfileErrorMessage: string
}
const ProfileUserForm = ({ profile, removeEditMode, updateProfileErrorMessage }: PropsType) => {
    const [fullNameHeight, setFullNameheight] = useState(20)
    const [aboutMeHeight, setaboutMeHeight] = useState(20)
    const [lookingForAJobDescriptionHeight, setlookingForAJobDescriptionHeight] = useState(20)
    const dispatch = useDispatch()
    let setFullNameheightFunc = (e: any) => {
        setFullNameheight(e.target.scrollHeight)
    }
    let setaboutMeHeightFunc = (e: any) => {
        setaboutMeHeight(e.target.scrollHeight)
    }
    let setlookingForAJobDescriptionHeightFunc = (e: any) => {
        setlookingForAJobDescriptionHeight(e.target.scrollHeight)
    }

    return (

        <Formik
            initialValues={{
                fullName: profile.fullName as string,
                aboutMe: profile.aboutMe as string,
                lookingForAjob: profile.lookingForAJob as boolean,
                lookingForAJobDescription: profile.lookingForAJobDescription as string,
                contacts: {
                    'github': profile.contacts['github'],
                    'vk': profile.contacts['vk'],
                    'facebook': profile.contacts['facebook'],
                    'instagram': profile.contacts['instagram'],
                    'twitter': profile.contacts['twitter'],
                    'website': profile.contacts['website'],
                    'youtube': profile.contacts['youtube'],
                    'mainLink': profile.contacts['mainLink'],

                } as any
            }}
            onSubmit={(values) => {
                debugger
                dispatch(updateProfileThunk(values))
                    //@ts-ignore
                    .then(() => {

                        removeEditMode()  // сработает только если промис не вернет отклоненный Promise.reject(data.messages)
                    })



            }}>
            {({ handleSubmit, handleChange, values }) => (
                <div className={s.right}>
                    <div className={s.rightTop}>
                        <div className={s.fullName}><textarea placeholder='Full name' style={{ 'height': `${fullNameHeight}px` }} onClick={(e) => {
                            setFullNameheightFunc(e)
                        }} onKeyDown={(e) => {
                            setFullNameheightFunc(e)
                        }} className={cn(s.textAreaInfo, 'changed')} onChange={handleChange} value={values.fullName} name={'fullName'}></textarea></div>
                        <div className={s.aboutMe}><textarea style={{ 'height': `${aboutMeHeight}px` }} onClick={(e) => {
                            setaboutMeHeightFunc(e)
                        }} onKeyDown={(e) => {
                            setaboutMeHeightFunc(e)

                        }} className={s.textAreaInfo} placeholder='About me' onChange={handleChange} value={values.aboutMe} name={'aboutMe'}></textarea></div>
                        <ProfileUserStatusContainer isOwner={true} />

                        <div className={s.lookingForAJoBox}>
                            <div className={s.lookingForAjob}>Looking for a job: <input checked={values.lookingForAjob} type="checkbox" onChange={handleChange} name={'lookingForAjob'} /></div>
                            <div className={s.lookingForAJobDescription}><textarea style={{ 'height': `${lookingForAJobDescriptionHeight}px` }} onKeyDown={(e) => {
                                setlookingForAJobDescriptionHeightFunc(e)

                            }} onClick={(e) => {
                                setlookingForAJobDescriptionHeightFunc(e)

                            }} className={s.textAreaInfo} placeholder='Looking for a job' name={'lookingForAJobDescription'} onChange={handleChange} value={values.lookingForAJobDescription}></textarea></div>
                        </div>
                        <div className={s.updateProfileErrorMessage}>
                            {updateProfileErrorMessage}
                        </div>
                        <button className={s.editButton} type={'submit'} onClick={() => {
                            handleSubmit()
                        }}>Save</button>
                    </div>
                    <div className={s.contacts}>
                        <div className={s.contactsTitle}>
                            Контакты:
                        </div>
                        <div>{Object.keys(profile.contacts).map((key) => {
                            return (
                                <div className={s.contacts}>
                                    <p className={s.contact}>
                                        <span>{key}:</span> <input className={s.textAreaContacts} value={values.contacts[key]} onChange={handleChange} name={`contacts.${key}`} ></input>
                                    </p>
                                </div>
                            )
                        })}


                        </div>
                    </div>
                </div>
            )}
        </Formik >

    )
}

export default ProfileUserForm