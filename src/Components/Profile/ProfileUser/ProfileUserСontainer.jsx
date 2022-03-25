
import axios from 'axios';
import { Component } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { profileApi } from '../../../Api/api';

import { setActualStringAC, setUserProfileAC } from '../../../Redux/Profile-reducer'
import ProfileUser from './ProfileUser';



class ProfileUserContainer extends Component {

    componentDidMount() {

        let userId = this.props.actualString["*"]
        if (!userId) {
            userId = 2
        }
        profileApi.getProfileAPI(userId)
            .then((data) => {
                this.props.setUserProfile(data)
            })

    }

    render() {
        let userId = this.props.actualString["*"]
        if (!userId) {
            userId = 2
        }
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
    profile: state.profilePage.profile,
    actualString: state.profilePage.actualString
})


export default connect(mapStateToProps, {
    setUserProfile: setUserProfileAC,
    setActualString: setActualStringAC
})(ProfileUserContainer);