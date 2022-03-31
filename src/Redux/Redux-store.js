import { applyMiddleware, combineReducers, createStore, } from "redux";
import AuthReducer from "./Auth-reducer";
import friendsReducer from "./Friends-reducer";
import messagesReducer from "./Messages-reducer";
import profileReducer from "./Profile-reducer";
import whoToFollowReducer from "./WhoToFollow-reducer";
import thunkMiddleware from 'redux-thunk'



let reducers = combineReducers({

    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    whoToFollow: whoToFollowReducer,
    auth: AuthReducer,



})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;



export default store