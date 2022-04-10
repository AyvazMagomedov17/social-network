
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getProfileThunk, getStatusThunk, savePhotoThunk, setActualStringAC, setUserProfileAC, updateProfileThunk } from '../../../Redux/Profile-reducer.ts'
import { getActualStringSelector, getIsgetProfileSelector, getProfileSelector, getUpdateProfileErrorMessageSelector, getUserIdSelector } from '../../../Redux/Selectors/ProfileUser-selectors';
import Preloader from '../../common/Preloader/Preloader';

import ProfileUser from './ProfileUser';



class ProfileUserContainer extends Component {

    refreshProfile = () => {
        let userId = this.props.actualString["*"]
        if (!userId) {
            userId = this.props.userId
        }
        this.props.getProfileThunk(userId)
        this.props.getStatusThunk(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.actualString["*"] != this.props.actualString["*"]) {
            this.refreshProfile()
        }

    }

    render() {
        if (this.props.isgetProfile) {
            return <Preloader />
        }
        return (
            <ProfileUser {...this.props} isOwner={!this.props.actualString["*"]} setActualString={this.props.setActualString} profile={this.props.profile} />
        )
    }

}


let mapStateToProps = (state) => ({
    profile: getProfileSelector(state),
    actualString: getActualStringSelector(state),
    userId: getUserIdSelector(state),
    updateProfileErrorMessage: getUpdateProfileErrorMessageSelector(state),
    isgetProfile: getIsgetProfileSelector(state)

})


export default compose(connect(mapStateToProps, {
    setUserProfile: setUserProfileAC,
    setActualString: setActualStringAC,
    getProfileThunk: getProfileThunk,
    getStatusThunk: getStatusThunk,
    savePhotoThunk: savePhotoThunk,
    updateProfileThunk: updateProfileThunk,

}))(ProfileUserContainer)