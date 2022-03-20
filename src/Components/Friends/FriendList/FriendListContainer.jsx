import { connect } from "react-redux";
import { setCurrentPageAC, setTotalUsersCountAC, setUsersAC } from "../../../Redux/Friends-reducer";
import axios from 'axios';
import React from 'react';
import FriendList from './FriendList';




class FriendListApiComponent extends React.Component {
    constructor(props) {
        super(props)

    }


    componentDidMount() {
        if (this.props.usersData.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then((response) => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)

                })
        }


    }
    setCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })

    }



    render() {

        return (
            <FriendList totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} usersData={this.props.usersData} currentPage={this.props.currentPage} setCurrentPage={this.setCurrentPage} />
        )
    }
}

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
const FriendListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendListApiComponent)

export default FriendListContainer;