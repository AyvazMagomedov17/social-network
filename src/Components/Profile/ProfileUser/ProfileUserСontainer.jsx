
import axios from 'axios';
import { Component } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { setActualStringAC, setUserProfileAC } from '../../../Redux/Profile-reducer'
import ProfileUser from './ProfileUser';



class ProfileUserContainer extends Component {

    componentDidMount() {


        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.actualString["*"]}`)
            .then((response) => {

                this.props.setUserProfile(response.data)


            })
    }

    render() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.actualString["*"]}`)
            .then((response) => {

                this.props.setUserProfile(response.data)


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