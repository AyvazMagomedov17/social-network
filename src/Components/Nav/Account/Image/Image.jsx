import s from './Image.module.css'

const Image = (props) => {
    return (

        <div className={s.img}>
            <img src={props.img} alt="" />
        </div>


    )
}

export default Image;