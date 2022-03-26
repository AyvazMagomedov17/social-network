import axios from 'axios';
import { Component } from 'react';
import { connect } from 'react-redux';
import { usersApi } from '../../Api/api';
import { setFollowsAC, toggleFollowsAC, whoToFollowThunkCreator } from '../../Redux/WhoToFollow-reducer';
import Item from './Item/Item';
import WhoToFollow from './WhoToFollow';
import s from './WhoToFollow.module.css'


class WhoToFollowApi extends Component {

    componentDidMount() {
        let page = 1;
        let count = 3
        this.props.whoToFollowThunk(page, count)
    }

    render() {
        return (
            <WhoToFollow followsData={this.props.followsData} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        followsData: state.whoToFollow.followsData
    }
}


const whoToFollowContainer = connect(mapStateToProps, {
    setFollows: setFollowsAC,
    toggleFollows: toggleFollowsAC,
    whoToFollowThunk: whoToFollowThunkCreator
})(WhoToFollowApi)


export default whoToFollowContainer