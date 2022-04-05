import { applyMiddleware, combineReducers, compose, createStore, } from "redux";
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


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))


window.store = store;



export default store