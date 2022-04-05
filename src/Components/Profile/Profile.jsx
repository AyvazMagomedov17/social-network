import PostsContainer from './Posts/PostsContainer';
import AddPostContainer from './AddPost/AddPostContainer';
import mainImg from '../../Assets/img/Profile/main.jpg'
import s from './Profile.module.css'
import ProfileUserСontainer from './ProfileUser/ProfileUserСontainer';




const Profile = (props) => {

    return (

        <div className={s.profile}>
            <ProfileUserСontainer />
            <AddPostContainer />
            <div className={s.img}>
                <img src={mainImg} alt="" />
            </div>
            <PostsContainer />
        </div>

    )
}

export default Profile;