import { Formik } from 'formik';
import React, { KeyboardEvent, useState } from 'react';

import { useDispatch } from 'react-redux';
//@ts-ignore
import { MessagesActions } from '../../../Redux/Messages-reducer.ts';
//@ts-ignore
import s from '../../../Styles/Dialogs/addMessage.module.scss'
const AddMessage = () => {
    const dispatch = useDispatch()
    const [textareaHeight, settextareaHeight] = useState<number>(50)
    const settextareaHeightFunc = (e: any) => {
        settextareaHeight(e.target.scrollHeight)
    }
    return (
        <Formik
            initialValues={{
                message: ''
            }}
            onSubmit={(values) => {
                dispatch(MessagesActions.addMessageAC(values.message))
            }}
        >
            {({ handleSubmit, handleReset, handleChange, values }) => (
                <div className={s.form}>
                    <textarea style={{ 'height': `${textareaHeight}px` }} onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
                        settextareaHeightFunc(e)
                        if (e.keyCode === 13) {
                            handleSubmit()
                            setTimeout(() => handleReset(), 1)
                        }

                    }} onChange={handleChange} name={'message'} value={values.message} placeholder='Write your message' className={s.textarea} ></textarea>
                    <button type={'submit'} onClick={() => {
                        handleSubmit()
                        setTimeout(() => handleReset(), 1)
                    }} className={s.button}><img src="img/Dialogs/arrow.svg" alt="" /></button>
                </div>
            )}
        </Formik>)
}
export default AddMessage;