import PostsContainer from './Posts/PostsContainer';
import AddPostContainer from './AddPost/AddPostContainer';
//@ts-ignore
import mainImg from '../../Assets/img/Profile/React-Redux.webp'
//@ts-ignore
import s from '../../Styles/Profile/profile.module.scss'
import ProfileUserСontainer from './ProfileUser/ProfileUserСontainer';




const Profile = () => {

    return (

        <div className={s.profile}>
            <ProfileUserСontainer />
            <AddPostContainer />
            <div className={s.posts}>
                <div className={s.img}>
                    <img src={mainImg} alt="" />
                </div>
                <PostsContainer />
            </div>

        </div>

    )
}

export default Profile;