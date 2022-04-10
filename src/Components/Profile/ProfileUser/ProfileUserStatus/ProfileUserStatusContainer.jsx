
import { connect } from 'react-redux'
import { compose } from 'redux'
import { updateStatusThunk } from '../../../../Redux/Profile-reducer.ts'

import ProfileUserStatus from './ProfileUserStatus'


let mapStateToProps = (state) => {
    return {
        status: state.profilePage.status
    }
}

export default compose(connect(mapStateToProps, {
    updateStatusThunk: updateStatusThunk
}))(ProfileUserStatus)