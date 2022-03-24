import { connect } from "react-redux";
import { setUsersAC, toggleFollowAC } from "../../../../Redux/Friends-reducer";
import Friend from "./Friend";




let mapStateToProps = (state) => {
    return {
        SDS: 0
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowAC(userId))
        },


    }
}
const FriendContainer = connect(mapStateToProps, mapDispatchToProps)(Friend)


export default FriendContainer;