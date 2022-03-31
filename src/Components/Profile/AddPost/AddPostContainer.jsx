
import { connect } from 'react-redux'
import { compose } from 'redux'
import { addPostActionCreator } from '../../../Redux/Profile-reducer'
import AddPost from './AddPost'





let mapStateToProps = (state) => {
    return {
        newPostTextarea: state.profilePage.newPostTextarea,
        img: state.profilePage.addPostImg

    }
}





export default compose(connect(mapStateToProps, {
    addPost: addPostActionCreator,

}))(AddPost);