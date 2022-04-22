import { useDispatch, useSelector } from "react-redux";
import { FilterType, filterUsersThunk, friendsAction, setCurrentPageThunk } from "../../../Redux/Friends-reducer";
import { useEffect, useState } from 'react';
import FriendList from "./FriendList";
import { getFilterSelector, getUsersDataSelector } from "../../../Redux/Selectors/FrienList-selector";
import { getCurrentPageSelector, getIsFetchingSelector, getPageSizeSelector, getTotalUsersCountSelector } from "../../../Redux/Selectors/FrienList-selector";
import { UsersDataType } from "../../../Types/types";
import { useLocation, useNavigate } from "react-router-dom";




const FriendListApiComponent = () => {

    const [termForFindUsers, setTermForFindUsers] = useState('')
    let dispatch = useDispatch()
    let history = useNavigate()
    let location = useLocation().search



    let StateProps = {
        usersData: useSelector(getUsersDataSelector) as Array<UsersDataType>,
        pageSize: useSelector(getPageSizeSelector) as number,
        totalUsersCount: useSelector(getTotalUsersCountSelector) as number,
        currentPage: useSelector(getCurrentPageSelector) as number,
        isFetching: useSelector(getIsFetchingSelector) as boolean,
        filter: useSelector(getFilterSelector) as FilterType
    }

    useEffect(() => {

        const pars = new URLSearchParams(location);
        const parsedTerm = pars.get('term')
        const parsedFriend = pars.get('friend')
        const parsedPage = pars.get('page')

        let actualPage = StateProps.currentPage
        let actualFilter = StateProps.filter
        if (!!parsedPage) actualPage = +parsedPage

        switch (parsedFriend) {
            case 'null':
                dispatch(friendsAction.setFilterAC({ friend: null, term: actualFilter.term }))
                dispatch(friendsAction.setCurrentPageAC(actualPage))
                actualFilter = { ...actualFilter, friend: null }
                break
            case 'true':
                dispatch(friendsAction.setFilterAC({ friend: true, term: actualFilter.term }))
                dispatch(friendsAction.setCurrentPageAC(actualPage))
                actualFilter = { ...actualFilter, friend: true }
                break
            case 'false':
                dispatch(friendsAction.setFilterAC({ friend: false, term: actualFilter.term }))
                dispatch(friendsAction.setCurrentPageAC(actualPage))
                actualFilter = { ...actualFilter, friend: false }

        }
        if (!!parsedTerm) {

            dispatch(friendsAction.setFilterAC({ term: parsedTerm, friend: actualFilter.friend }))
            actualFilter = { ...actualFilter, term: parsedTerm }
        }

        dispatch(filterUsersThunk(actualPage, StateProps.pageSize, actualFilter.term, actualFilter.friend))
    }, [])
    useEffect(() => {
        debugger
        history(`/friends?term=${StateProps.filter.term}&friend=${StateProps.filter.friend}&page=${StateProps.currentPage}`)

    }, [StateProps.filter, StateProps.currentPage])

    let setCurrentPage = (pageNumber: number) => {
        dispatch(setCurrentPageThunk(pageNumber, StateProps.pageSize))
    }
    return (
        <FriendList {...StateProps} setTermForFindUsers={setTermForFindUsers} setCurrentPage={setCurrentPage} />
    )
}
export default FriendListApiComponent;