
import { addPostActionCreator, changeTextareaActionCreator } from '../../../Redux/Profile-reducer'
import AddPost from './AddPost'



const AddPostContainer = (props) => {




    let addPost = () => {
        props.store.dispatch(addPostActionCreator())

    }
    let PostChange = (text) => {
        props.store.dispatch(changeTextareaActionCreator(text))
    }
    return (
        <AddPost changeTextarea={PostChange} addPost={addPost} newPostTextarea={props.store.newPostTextarea} img={props.img} />
    )


}

export default AddPostContainer;