import axios from 'axios';
import { Component } from 'react';
import { connect } from 'react-redux';
import { setFollowsAC, toggleFollowsAC } from '../../Redux/WhoToFollow-reducer';
import Item from './Item/Item';
import WhoToFollow from './WhoToFollow';
import s from './WhoToFollow.module.css'


class WhoToFollowApi extends Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=3`)
            .then((response) => {
                this.props.setFollows(response.data.items)
            })
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
    toggleFollows: toggleFollowsAC
})(WhoToFollowApi)

export default whoToFollowContainer