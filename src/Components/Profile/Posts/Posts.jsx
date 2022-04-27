import Post from './Post/Post';
import s from '../../../Styles/Profile/posts.module.scss'


const Posts = ({ postData, profile }) => {


    let postDatat = postData

    let postElem = postDatat
        .map(post => <Post key={post.text} name={profile.fullName} follow={post.follow} like={post.like} dislike={post.dislike} img={profile.photos.small != null ? profile.photos.small : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} text={post.text} />)

    return (
        <div className={s.posts}>
            <div className={s.body}>
                {postElem}
            </div>
        </div>
    )
}

export default Posts;