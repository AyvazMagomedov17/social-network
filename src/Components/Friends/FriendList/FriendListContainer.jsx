import { connect } from "react-redux";
import { getUsersThunk, setCurrentPageThunk } from "../../../Redux/Friends-reducer";
import React from 'react';
import FriendList from './FriendList';
import { compose } from "redux";




class FriendListApiComponent extends React.Component {
    constructor(props) {
        super(props)

    }


    componentDidMount() {

        if (this.props.usersData.length === 0) {
            this.props.getUsersThunk(this.props.currentPage, this.props.pageSize, 'FRIENDS')
        }


    }
    setCurrentPage = (pageNumber) => {
        this.props.setCurrentPageThunk(pageNumber, this.props.pageSize)
    }



    render() {

        return (
            <FriendList isFetching={this.props.isFetching} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} usersData={this.props.usersData} currentPage={this.props.currentPage} setCurrentPage={this.setCurrentPage} />
        )
    }
}

let mapStateToProps = (state) => {

    return {
        usersData: state.friendsPage.usersData,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching


    }

}



export default compose(connect(mapStateToProps, {
    getUsersThunk: getUsersThunk,
    setCurrentPageThunk: setCurrentPageThunk

}))(FriendListApiComponent);