import { connect } from "react-redux";
import { setUsersAC } from "../../../Redux/Friends-reducer";
import FriendList from "./FriendList";
import FriendListC from "./FriendListС";





let mapStateToProps = (state) => {

    return {
        usersData: state.friendsPage.usersData,


    }

}
let mapDispatchToProps = (dispatch) => {

    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }

    }
}
const FriendListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendListC)

export default FriendListContainer;