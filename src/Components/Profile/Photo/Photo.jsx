import s from './Photo.module.css'

const Photo = (props) => {
    return (
        <form action="#" className={s.form}>
            <img src={props.img} alt="people" className={s.image} />
            <textarea placeholder='Write what you wish' className={s.textarea}></textarea>
            <button className={s.button}>Publish</button>
        </form>

    )
}

export default Photo;