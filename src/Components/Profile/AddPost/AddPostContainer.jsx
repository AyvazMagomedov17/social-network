
import { connect } from 'react-redux'
import { addPostActionCreator, changeTextareaActionCreator } from '../../../Redux/Profile-reducer'
import AddPost from './AddPost'




let mapStateToProps = (state) => {
    return {
        newPostTextarea: state.profilePage.newPostTextarea
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        changeTextarea: (text) => {
            dispatch(changeTextareaActionCreator(text))
        }
    }
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

export default AddPostContainer;