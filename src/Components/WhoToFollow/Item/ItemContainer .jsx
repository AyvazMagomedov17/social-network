import { connect } from 'react-redux';
import { followUnfollowThunk } from '../../../Redux/Friends-reducer.ts';

import Item from './Item';


let mapStateToProps = (state) => {
    return {
        usersData: state.friendsPage.whoToFollowsData,
        followingInProgress: state.friendsPage.followingInProgressArr
    }
}


const ItemContainer = connect(mapStateToProps, {
    toggleFollows: followUnfollowThunk
})(Item)
export default ItemContainer;