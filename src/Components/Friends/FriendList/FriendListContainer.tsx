import { useDispatch } from "react-redux";
import { getUsersThunk, setCurrentPageThunk } from "../../../Redux/Friends-reducer";
import { useEffect } from 'react';
import FriendList from "./FriendList";
import { getUsersDataSelector } from "../../../Redux/Selectors/FrienList-selector";
import { getCurrentPageSelector, getIsFetchingSelector, getPageSizeSelector, getTotalUsersCountSelector } from "../../../Redux/Selectors/FrienList-selector";
import { UsersDataType } from "../../../Types/types";
import { GetFuncForUseSelector } from "../../common/Functions/Functions";


const FriendListApiComponent = () => {

    let dispatch = useDispatch()
    let StateProps = {
        usersData: GetFuncForUseSelector(getUsersDataSelector) as Array<UsersDataType>,
        pageSize: GetFuncForUseSelector(getPageSizeSelector) as number,
        totalUsersCount: GetFuncForUseSelector(getTotalUsersCountSelector) as number,
        currentPage: GetFuncForUseSelector(getCurrentPageSelector) as number,
        isFetching: GetFuncForUseSelector(getIsFetchingSelector) as boolean
    }

    useEffect(() => {
        if (StateProps.usersData.length === 0) {
            dispatch(getUsersThunk(StateProps.currentPage, StateProps.pageSize, 'FRIENDS'))
        }
    }, [])

    let setCurrentPage = (pageNumber: number) => {
        dispatch(setCurrentPageThunk(pageNumber, StateProps.pageSize))
    }
    return (
        <FriendList isFetching={StateProps.isFetching} totalUsersCount={StateProps.totalUsersCount} pageSize={StateProps.pageSize} usersData={StateProps.usersData} currentPage={StateProps.currentPage} setCurrentPage={setCurrentPage} />
    )

}

export default FriendListApiComponent;