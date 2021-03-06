import PostsContainer from './Posts/PostsContainer';
import AddPostContainer from './AddPost/AddPostContainer';
//@ts-ignore
import mainImg from '../../Assets/img/Profile/React-Redux.webp'
//@ts-ignore
import s from '../../Styles/Profile/profile.module.scss'
import ProfileUser–°ontainer from './ProfileUser/ProfileUser–°ontainer';




const Profile = () => {

    return (

        <div className={s.profile}>
            <ProfileUser–°ontainer />
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