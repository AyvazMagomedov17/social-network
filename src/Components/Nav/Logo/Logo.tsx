
//@ts-ignore
import s from '../../../Styles/Navbar/logo.module.scss'
//@ts-ignore
import Logo1Img from '../../../Assets/img/Navbar/Vector.svg'
//@ts-ignore
import Logo2Img from '../../../Assets/img/Navbar/TEAMDER.svg'



type Props = {}

const Logo = (props: Props) => {
    return (
        <div className={s.logo}>
            <div className={s.img}>
                <img src={Logo1Img} alt="" />
                <img src={Logo2Img} alt="" />
            </div>
        </div>
    )
}

export default Logo