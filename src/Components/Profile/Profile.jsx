import PostsContainer from './Posts/PostsContainer';
import AddPostContainer from './AddPost/AddPostContainer';
import Posts from './Posts/Posts';
import s from './Profile.module.css'
let itemImg = 'img/Profile/'

const Profile = (props) => {

    return (
        <div className={s.profile}>
            <AddPostContainer store={props.store} img={`${itemImg}user1.jpg`} />
            <div className={s.img}>
                <img src="img/Profile/main.jpg" alt="" />
            </div>
            <PostsContainer store={props.store} />
        </div>
    )
}

export default Profile;