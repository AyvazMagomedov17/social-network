import Post from './Post/Post';
import Posts from './Posts'

let itemImg = 'img/Profile/'

const PostsContainer = (props) => {

    let state = props.store.getState()

    let postData = state.profilePage.postData



    return (
        <Posts postData={postData} />
    )
}

export default PostsContainer;