
import s from '../../../Styles/Profile/addPost.module.scss'

import { Formik } from 'formik'
import Preloader from '../../common/Preloader/Preloader'
import { useState } from 'react'




const AddPost = ({ addPost, profile }) => {
    const [textAreaHeight, settextAreaHeight] = useState(20)

    let settextAreaHeightFunc = (e) => {
        settextAreaHeight(e.target.scrollHeight)
    }
    let onAddPost = (text) => {
        addPost(text)

    }
    if (!profile) {
        return <Preloader />
    }
    return (

        <Formik
            initialValues={{
                text: ''
            }}
            onSubmit={(values) => {
                onAddPost(values.text)
            }}>
            {({ handleSubmit, handleReset, handleChange, values }) => (
                <div className={s.form}>
                    <img src={profile.photos.small != null ? profile.photos.small : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="people" className={s.image} />
                    <div className={s.formChild}>
                        <textarea onKeyDown={(e) => {
                            settextAreaHeightFunc(e)
                            if (e.keyCode === 13) {
                                handleSubmit()
                                setTimeout(() => handleReset(), 1)
                            }

                        }} onChange={handleChange} name={'text'} value={values.text} placeholder='Write what you wish' className={s.textarea}></textarea>
                        <button type={"submit"} className={s.button} onClick={() => {
                            handleSubmit()
                            setTimeout(() => handleReset(), 1)
                        }}>Publish</button>
                    </div>
                </div>
            )
            }

        </Formik >


    )


}



export default AddPost;