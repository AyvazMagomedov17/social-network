//@ts-ignore
import { stateType } from './../Redux-store.ts';
export const getUsersDataSelector = (state: stateType) => {
    return state.friendsPage.usersData
}
export const getPageSizeSelector = (state: stateType) => {
    return state.friendsPage.pageSize
}
export const getTotalUsersCountSelector = (state: stateType) => {
    return state.friendsPage.totalUsersCount
}
export const getCurrentPageSelector = (state: stateType) => {
    return state.friendsPage.currentPage
}
export const getIsFetchingSelector = (state: stateType) => {
    return state.friendsPage.isFetching
}
export const getFilterSelector = (state: stateType) => {
    return state.friendsPage.filter
}