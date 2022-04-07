
import s from '../ProfileUser.module.css'
import ProfileUserStatusContainer from '../ProfileUserStatus/ProfileUserStatusContainer'
import { Formik } from 'formik'
import Preloader from '../../../common/Preloader/Preloader'


const ProfileUserForm = ({ profile, removeEditMode, updateProfileThunk, updateProfileErrorMessage }) => {


    return (

        <Formik
            initialValues={{
                fullName: profile.fullName,
                aboutMe: profile.aboutMe,
                lookingForAjob: profile.lookingForAJob,
                lookingForAJobDescription: profile.lookingForAJobDescription,
                contacts: {
                    'github': profile.contacts['github'],
                    'vk': profile.contacts['vk'],
                    'facebook': profile.contacts['facebook'],
                    'instagram': profile.contacts['instagram'],
                    'twitter': profile.contacts['twitter'],
                    'website': profile.contacts['website'],
                    'youtube': profile.contacts['youtube'],
                    'mainLink': profile.contacts['mainLink'],

                }
            }}
            onSubmit={(values) => {

                updateProfileThunk(values)
                    .then(() => {
                        removeEditMode()
                    })



            }}>
            {({ handleSubmit, handleChange, values }) => (
                <div className={s.right}>
                    <div className={s.rightTop}>
                        <div className={s.fullName}><textarea onChange={handleChange} value={values.fullName} name={'fullName'}></textarea></div>
                        <div className={s.aboutMe}><textarea placeholder='About me' onChange={handleChange} value={values.aboutMe} name={'aboutMe'}></textarea></div>
                        <div className={s.lookingForAjob}>Looking for a job: <input checked={values.lookingForAjob} type="checkbox" onChange={handleChange} name={'lookingForAjob'} /></div>
                        <div className={s.lookingForAJobDescription}><textarea placeholder='Looking for a job' name={'lookingForAJobDescription'} onChange={handleChange} value={values.lookingForAJobDescription}></textarea></div>
                        <ProfileUserStatusContainer />
                    </div>
                    <div className={s.contacts}>
                        <div className={s.contactsTitle}>
                            Контакты:
                        </div>
                        <div>{Object.keys(profile.contacts).map(key => {
                            return (
                                <div className={s.contacts}>
                                    <p className={s.contact}>
                                        {key}: <textarea value={values.contacts[key]} onChange={handleChange} name={`contacts.${key}`} ></textarea>
                                    </p>
                                </div>
                            )
                        })}
                            <div className={s.updateProfileErrorMessage}>
                                {updateProfileErrorMessage}
                            </div>
                            <button type={'submit'} onClick={() => {
                                handleSubmit()


                            }}>Save</button>
                        </div>
                    </div>
                </div>
            )}
        </Formik>

    )
}

export default ProfileUserForm