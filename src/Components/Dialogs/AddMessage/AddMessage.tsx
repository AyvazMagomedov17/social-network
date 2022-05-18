import { Formik } from 'formik';
import { KeyboardEvent, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { sendMessageThunk } from '../../../Redux/Messages-reducer';

//@ts-ignore
import s from '../../../Styles/Dialogs/addMessage.module.scss'
const AddMessage = () => {
    let params = useParams()
    let userId = Number(params['*'])
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
                dispatch(sendMessageThunk(userId, values.message))
            }}
        >
            {({ handleSubmit, handleReset, handleChange, values }) => (
                <div id='addMessage' className={s.form}>
                    <textarea style={{ 'height': `${textareaHeight}px` }} onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
                        settextareaHeightFunc(e)
                        if (e.keyCode === 13) {
                            handleSubmit()
                            setTimeout(() => handleReset(), 1)
                        }

                    }} onChange={handleChange} name={'message'} value={values.message} placeholder='Write your message' className={s.textarea} ></textarea>

                </div>
            )}
        </Formik>)
}
export default AddMessage;