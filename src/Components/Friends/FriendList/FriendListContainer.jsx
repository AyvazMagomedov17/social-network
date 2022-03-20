import { connect } from "react-redux";
import { setCurrentPageAC, setTotalUsersCountAC, setUsersAC } from "../../../Redux/Friends-reducer";
import FriendList from "./FriendList";
import FriendListC from "./FriendListС";





let mapStateToProps = (state) => {

    return {
        usersData: state.friendsPage.usersData,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage


    }

}
let mapDispatchToProps = (dispatch) => {

    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count))
        }

    }
}
const FriendListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendListC)

export default FriendListContainer;