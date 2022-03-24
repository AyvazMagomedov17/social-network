
import { connect } from 'react-redux'
import { addPostActionCreator, changeTextareaActionCreator } from '../../../Redux/Profile-reducer'
import AddPost from './AddPost'




let mapStateToProps = (state) => {
    return {
        newPostTextarea: state.profilePage.newPostTextarea,
        img: state.profilePage.addPostImg

    }
}



const AddPostContainer = connect(mapStateToProps, {
    addPost: addPostActionCreator,
    changeTextarea: changeTextareaActionCreator
})(AddPost)


export default AddPostContainer;