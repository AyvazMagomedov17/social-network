
import { Component } from 'react';
import { connect } from 'react-redux';

import { compose } from 'redux';
import { profileApi } from '../../../Api/api';
import { getProfileThunkCreator, getStatusThunkCreator, setActualStringAC, setUserProfileAC } from '../../../Redux/Profile-reducer'
import { getActualStringSelector, getProfileSelector, getUserIdSelector } from '../../../Redux/Selectors/ProfileUser-selectors';
import ProfileUser from './ProfileUser';



class ProfileUserContainer extends Component {

    componentDidMount() {

        let userId = this.props.actualString["*"]
        if (!userId) {
            userId = this.props.userId
        }
        this.props.getProfileThunk(userId)
        this.props.getStatusThunk(userId)


    }

    render() {
        let userId = this.props.actualString["*"]
        if (!userId) {
            userId = this.props.userId
        }
        this.props.getStatusThunk(userId)
        profileApi.getProfileAPI(userId)
            .then((data) => {

                this.props.setUserProfile(data)

            })

        return (
            <ProfileUser setActualString={this.props.setActualString} profile={this.props.profile} />
        )
    }

}


let mapStateToProps = (state) => ({
    profile: getProfileSelector(state),
    actualString: getActualStringSelector(state),
    userId: getUserIdSelector(state)

})


export default compose(connect(mapStateToProps, {
    setUserProfile: setUserProfileAC,
    setActualString: setActualStringAC,
    getProfileThunk: getProfileThunkCreator,
    getStatusThunk: getStatusThunkCreator
}))(ProfileUserContainer)