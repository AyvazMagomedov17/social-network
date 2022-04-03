import { applyMiddleware, combineReducers, createStore, } from "redux";
import AuthReducer from "./Auth-reducer";
import friendsReducer from "./Friends-reducer";
import messagesReducer from "./Messages-reducer";
import profileReducer from "./Profile-reducer";

import thunkMiddleware from 'redux-thunk'
import appReducer from "./App-reducer";



let reducers = combineReducers({

    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    auth: AuthReducer,
    app: appReducer




})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;



export default store