import s from './Name.module.css'

const Name = (props) => {
    return (

        <a href={props.link} className={s.name}>{props.name}</a>


    )
}

export default Name;