import s from './Preloader.module.css'
import loader from './../../../Assets/img/common/Loader.gif'
let Preloader = () => {
    return (
        <div className={s.loader}><img src={loader} /></div>
    )
}


export default Preloader;