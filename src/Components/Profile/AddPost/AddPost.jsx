import { createRef, useRef } from 'react'
import s from './AddPost.module.css'
import React from 'react'
import { addPostActionCreator, changeTextareaActionCreator } from '../../../Redux/Profile-reducer'



const AddPost = (props) => {



    let newPostElement = useRef(null)
    let onAddPost = () => {
        props.addPost()

    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.changeTextarea(text)

    }
    return (
        <div className={s.form}>
            <img src={props.img} alt="people" className={s.image} />
            <textarea onChange={onPostChange} ref={newPostElement} placeholder='Write what you wish' value={props.newPostTextarea} className={s.textarea} ></textarea>
            <button onClick={onAddPost} className={s.button}>Publish</button>

        </div>

    )


}



export default AddPost;