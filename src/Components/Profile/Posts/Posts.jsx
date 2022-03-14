import Post from './Post/Post';
import s from './Posts.module.css'
let itemImg = 'img/Profile/'

const Posts = (props) => {


    let postData = props.postData

    let postElem = postData
        .map(post => <Post name={post.name} follow={post.follow} like={post.like} dislike={post.dislike} img={post.img} text={post.text} />)

    return (
        <div className={s.posts}>
            <div className={s.body}>
                {postElem}
            </div>
        </div>
    )
}

export default Posts;