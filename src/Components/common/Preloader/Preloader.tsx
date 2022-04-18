//@ts-ignore
import s from './Preloader.module.css'
//@ts-ignore
import loader from './../../../Assets/img/common/Loader.gif'
let Preloader = () => {
    return (
        <div className={s.loader}><img src={loader} /></div>
    )
}


export default Preloader;