import { applyMiddleware, combineReducers, compose, createStore, } from "redux";
import AuthReducer from "./Auth-reducer.ts";
import friendsReducer from "./Friends-reducer.ts";
import messagesReducer from "./Messages-reducer.ts";
import profileReducer from "./Profile-reducer.ts";

import thunkMiddleware from 'redux-thunk'
import appReducer from "./App-reducer.ts";



let reducers = combineReducers({

    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    auth: AuthReducer,
    app: appReducer




})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
window.store = store

window.store = store;



export default store