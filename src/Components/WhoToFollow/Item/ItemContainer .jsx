import { connect } from 'react-redux';
import { followUnfollowThunk } from '../../../Redux/Friends-reducer.ts';

import Item from './Item';
import s from './Item.module.css'


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