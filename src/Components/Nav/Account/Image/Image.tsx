//@ts-ignore
import s from '../../../../Styles/Navbar/image.module.scss'

const Image = ({ img }: { img: string }) => {
    return (

        <div className={s.img}>
            <img src={img} alt="" />
        </div>


    )
}

export default Image;