import s from './Followers.module.css'

const Followers = (props) => {
    return (

        <a href={props.link} className={s.followers}><span>{props.count} followers</span></a>


    )
}

export default Followers;