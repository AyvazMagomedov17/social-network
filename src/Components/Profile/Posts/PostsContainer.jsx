import { connect } from 'react-redux';
import { compose } from 'redux';

import Posts from './Posts'





let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData
    }
}

export default compose(connect(mapStateToProps))(Posts);