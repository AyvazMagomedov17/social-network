import { Formik } from 'formik';
import s from './AddMessage.module.css'
const AddMessage = ({ addMessage }) => {
    return (
        <Formik
            initialValues={{
                message: ''
            }}
            onSubmit={(values) => {
                addMessage(values.message)
            }}
        >
            {({ handleSubmit, handleReset, handleChange, values }) => (
                <div className={s.form}>
                    <textarea onChange={handleChange} name={'message'} value={values.message} placeholder='Write your message' className={s.textarea} ></textarea>
                    <button type={'submit'} onClick={() => {
                        handleSubmit()
                        setTimeout(() => handleReset(), 1)
                    }} className={s.button}><img src="img/Dialogs/arrow.svg" alt="" /></button>
                </div>
            )}
        </Formik>)
}
export default AddMessage;