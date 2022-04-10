import { connect } from "react-redux";
import { compose } from "redux";
import { followUnfollowThunk } from "../../../../Redux/Friends-reducer.ts";
import Friend from "./Friend";




let mapStateToProps = (state) => {

    return {
        usersData: state.friendsPage.usersData,
        followingInProgress: state.friendsPage.followingInProgressArr

    }
}

export default compose(connect(mapStateToProps, {

    followUnfollowThunk: followUnfollowThunk
}))(Friend)