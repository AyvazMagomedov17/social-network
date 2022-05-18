import { NavLink } from 'react-router-dom';
//@ts-ignore
import s from '../../../../Styles/Dialogs/dialog.module.scss'

type PropsType = {
    id: number | null,
    name: string
    img: string
}
const Dialog = ({ img, id, name }: PropsType) => {

    let path = '/messages/' + id;
    return (


        <div className={s.dialog}>
            <NavLink to={path} className={s.row}>
                <div className={s.left}>
                    <NavLink to={`/profile/${id}`}>
                        <div className={s.img}>
                            <img src={img} alt="dialogUser" />
                        </div>
                    </NavLink>
                </div>
                <div className={s.right}>
                    <div className={s.top}>
                        <span className={s.name}>{name}</span>

                    </div>
                    <div className={s.bottom}>
                        <div className={s.lastMessage}> id: {id}</div>
                    </div>
                </div>
            </NavLink>
        </div>


    )
}

export default Dialog;