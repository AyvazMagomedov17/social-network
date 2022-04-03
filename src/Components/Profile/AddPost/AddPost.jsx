
import s from './AddPost.module.css'
import React from 'react'
import { Formik } from 'formik'




const AddPost = ({ addPost, img }) => {
    let onAddPost = (text) => {
        addPost(text)

    }
    return (
        <div className={s.form}>
            <img src={img} alt="people" className={s.image} />
            <Formik
                initialValues={{
                    text: ''
                }}
                onSubmit={(values) => {
                    onAddPost(values.text)
                }}>
                {({ handleSubmit, handleReset, handleChange, values }) => (
                    <div className={s.formChild}>
                        <textarea onChange={handleChange} name={'text'} value={values.text} placeholder='Write what you wish' className={s.textarea}></textarea>
                        <button type={"submit"} className={s.button} onClick={() => {
                            handleSubmit()
                            setTimeout(() => handleReset(), 1)
                        }}>Publish</button>
                    </div>
                )
                }
            </Formik >
        </div >

    )


}



export default AddPost;