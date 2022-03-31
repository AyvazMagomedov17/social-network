import { useRef } from 'react'
import s from './AddPost.module.css'
import React from 'react'
import { Formik } from 'formik'




const AddPost = (propsi) => {
    let onAddPost = (text) => {
        propsi.addPost(text)

    }
    return (
        <div className={s.form}>
            <img src={propsi.img} alt="people" className={s.image} />
            <Formik
                initialValues={{
                    text: ''
                }}
                onSubmit={(values) => {
                    onAddPost(values.text)
                }}>
                {props => (
                    <div className={s.formChild}>
                        <textarea onChange={props.handleChange} name={'text'} value={props.values.text} placeholder='Write what you wish' className={s.textarea}></textarea>
                        <button type={"submit"} className={s.button} onClick={() => {
                            props.handleSubmit()
                            setTimeout(() => props.handleReset(), 1)
                        }}>Publish</button>
                    </div>
                )
                }
            </Formik >
        </div >

    )


}



export default AddPost;