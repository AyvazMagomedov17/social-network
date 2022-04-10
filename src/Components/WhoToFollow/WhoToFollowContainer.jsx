
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUsersThunk } from '../../Redux/Friends-reducer.ts';



import WhoToFollow from './WhoToFollow';



class WhoToFollowApi extends Component {

    componentDidMount() {
        let page = 1;
        let count = 3
        this.props.getUsersThunk(page, count, 'WHO_TO_FOLLOW')
    }

    render() {
        return (
            <WhoToFollow usersData={this.props.usersData} followsData={this.props.followsData} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.friendsPage.whoToFollowsData
    }
}




export default compose(connect(mapStateToProps, {
    getUsersThunk: getUsersThunk
}))(WhoToFollowApi)