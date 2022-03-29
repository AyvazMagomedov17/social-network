
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { setFollowsAC, toggleFollowsAC, whoToFollowThunkCreator } from '../../Redux/WhoToFollow-reducer';

import WhoToFollow from './WhoToFollow';



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




export default compose(connect(mapStateToProps, {
    setFollows: setFollowsAC,
    toggleFollows: toggleFollowsAC,
    whoToFollowThunk: whoToFollowThunkCreator
}))(WhoToFollowApi)