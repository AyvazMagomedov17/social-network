

import { useDispatch } from "react-redux";
import { followUnfollowThunk } from "../../../../Redux/Friends-reducer";
import { getFollowingInProgressSelector } from "../../../../Redux/Selectors/Friend-selectors";
import { getUsersDataSelector } from "../../../../Redux/Selectors/FrienList-selector";
import { UsersDataType } from "../../../../Types/types";
import { GetFuncForUseSelector } from "../../../common/Functions/Functions";
import { FriendPropsType } from "./Friend";
import Friend from "./Friend";
import { memo } from "react";



let FriendContainer = memo((props: FriendPropsType) => {
    let dispatch = useDispatch()
    let followUnfollow = (id: number, usersData: Array<UsersDataType>): void => {
        dispatch(followUnfollowThunk(id, usersData))
    }
    type StatePropsType = {
        usersData: Array<UsersDataType>
        followingInProgress: Array<number>
    }
    let StateProps: StatePropsType = {
        usersData: GetFuncForUseSelector(getUsersDataSelector),
        followingInProgress: GetFuncForUseSelector(getFollowingInProgressSelector)
    }

    return (
        <Friend {...props} usersData={StateProps.usersData} followingInProgress={StateProps.followingInProgress} followUnfollowThunk={followUnfollow} />
    )
}
)
export default FriendContainer
