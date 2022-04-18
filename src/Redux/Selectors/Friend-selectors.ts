//@ts-ignore
import { stateType } from './../Redux-store.ts';


export const getFollowingInProgressSelector = (state: stateType) => {
    return state.friendsPage.followingInProgressArr
}
