import { NavLink } from 'react-router-dom';
//@ts-ignore
import s from '../../../../Styles/Navbar/nav.module.scss'
type PropsType = {
    name: string
    link: string
    status: string
}
const Name = ({ name, link, status }: PropsType) => {
    return (
        <>
            <NavLink to={`profile/${link}`} className={s.name}>{name}</NavLink>
            <p className={s.status}>{status}</p>
        </>

    )
}

export default Name;