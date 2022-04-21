import { useDispatch } from "react-redux";
import { findUsersThunk, friendsAction, getFriendsThunk, getUsersThunk, setCurrentPageThunk } from "../../../Redux/Friends-reducer";
import { useEffect, useState } from 'react';
import FriendList from "./FriendList";
import { getUsersDataSelector } from "../../../Redux/Selectors/FrienList-selector";
import { getCurrentPageSelector, getIsFetchingSelector, getPageSizeSelector, getTotalUsersCountSelector } from "../../../Redux/Selectors/FrienList-selector";
import { UsersDataType } from "../../../Types/types";
import { GetFuncForUseSelector } from "../../common/Functions/Functions";
import Preloader from "../../common/Preloader/Preloader";


const FriendListApiComponent = () => {

    const [isGetFriends, setIsGetFriends] = useState(false)
    const [isClick, setisClick] = useState(false)
    const [isFindUsers, setIsFindUsers] = useState(false)
    const [termForFindUsers, setTermForFindUsers] = useState('')

    let dispatch = useDispatch()
    let StateProps = {
        usersData: GetFuncForUseSelector(getUsersDataSelector) as Array<UsersDataType>,
        pageSize: GetFuncForUseSelector(getPageSizeSelector) as number,
        totalUsersCount: GetFuncForUseSelector(getTotalUsersCountSelector) as number,
        currentPage: GetFuncForUseSelector(getCurrentPageSelector) as number,
        isFetching: GetFuncForUseSelector(getIsFetchingSelector) as boolean
    }


    useEffect(() => {

        if (isGetFriends) {

            dispatch(getFriendsThunk(StateProps.currentPage, StateProps.pageSize, 'FRIENDS'))
            setIsFindUsers(false)

        }
        if (!isGetFriends && !isFindUsers) {

            dispatch(getUsersThunk(StateProps.currentPage, StateProps.pageSize, 'FRIENDS'))
            setIsFindUsers(false)

        }

    }, [isGetFriends, isFindUsers])

    if (isClick) {
        console.log('negro')
        dispatch(friendsAction.setCurrentPageAC(1))

        setisClick(false)
    }

    let setCurrentPage = (pageNumber: number) => {

        if (isFindUsers) {

            dispatch(setCurrentPageThunk(pageNumber, StateProps.pageSize, termForFindUsers))

        } else {

            dispatch(setCurrentPageThunk(pageNumber, StateProps.pageSize))
        }

    }

    return (
        <FriendList setIsFindUsers={setIsFindUsers} setTermForFindUsers={setTermForFindUsers} setisClick={setisClick} isGetFriends={isGetFriends} setIsGetFriends={setIsGetFriends} isFetching={StateProps.isFetching} totalUsersCount={StateProps.totalUsersCount} pageSize={StateProps.pageSize} usersData={StateProps.usersData} currentPage={StateProps.currentPage} setCurrentPage={setCurrentPage} />
    )

}

export default FriendListApiComponent;