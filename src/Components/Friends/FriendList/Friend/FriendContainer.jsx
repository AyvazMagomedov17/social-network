import { connect } from "react-redux";
import { setUsersAC, toggleFollowAC, togglefollowingInProgressAC } from "../../../../Redux/Friends-reducer";
import Friend from "./Friend";




let mapStateToProps = (state) => {

    return {
        usersData: state.friendsPage.usersData,
        followingInProgress: state.friendsPage.followingInProgressArr

    }
}

const FriendContainer = connect(mapStateToProps, {
    toggleFollow: toggleFollowAC,
    togglefollowingInProgress: togglefollowingInProgressAC
})(Friend)


export default FriendContainer;