import s from './Form.module.css'

const Form = (props) => {
    return (

        <form action="#" className={s.form}>
            <input type="text" className={s.find} placeholder='Search friends, photos, videos...' />
        </form>

    )
}

export default Form;