
import { connect } from 'react-redux'
import { compose } from 'redux'
import { updateStatusThunkCreator } from '../../../../Redux/Profile-reducer'

import ProfileUserStatus from './ProfileUserStatus'


let mapStateToProps = (state) => {
    return {
        status: state.profilePage.status
    }
}

export default compose(connect(mapStateToProps, {
    updateStatusThunk: updateStatusThunkCreator
}))(ProfileUserStatus)