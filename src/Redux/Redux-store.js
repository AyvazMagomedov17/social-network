import { combineReducers, createStore, } from "redux";
import friendsReducer from "./Friends-reducer";
import messagesReducer from "./Messages-reducer";
import profileReducer from "./Profile-reducer";
import whoToFollowReducer from "./WhoToFollow-reducer";


let reducers = combineReducers({

    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    whoToFollow: whoToFollowReducer


})

let store = createStore(reducers);

window.store = store;



export default store