//@ts-ignore
import { stateType } from './../Redux-store.ts';


export const getPostsSelector = (state: stateType) => {
    return state.profilePage.postData
}