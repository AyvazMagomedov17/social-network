import { connect } from "react-redux";
import { changeFetchingAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC } from "../../../Redux/Friends-reducer";
import axios from 'axios';
import React from 'react';
import FriendList from './FriendList';

import s from './FriendListContainer.module.css'
import Preloader from "../../common/Preloader/Preloader";
import { getUsersAPI, usersApi } from "../../../Api/api";




class FriendListApiComponent extends React.Component {
    constructor(props) {
        super(props)

    }


    componentDidMount() {
        if (this.props.usersData.length === 0) {
            usersApi.getUsersAPI(this.props.currentPage, this.props.pageSize)
                .then((data) => {
                    this.props.setUsers(data.items)
                    this.props.setTotalUsersCount(data.totalCount)
                    this.props.changeFetching()

                })
        }


    }
    setCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        usersApi.getUsersAPI(pageNumber, this.props.pageSize)
            .then((data) => {
                this.props.setUsers(data.items)
                this.props.changeFetching()

            })

    }



    render() {

        return (
            <>
                {this.props.isFetching
                    ?
                    <Preloader />
                    :
                    <FriendList totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} usersData={this.props.usersData} currentPage={this.props.currentPage} setCurrentPage={this.setCurrentPage} />}

            </>
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
const FriendListContainer = connect(mapStateToProps, {
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,

    setTotalUsersCount: setTotalUsersCountAC,
    changeFetching: changeFetchingAC,

})(FriendListApiComponent)

export default FriendListContainer;