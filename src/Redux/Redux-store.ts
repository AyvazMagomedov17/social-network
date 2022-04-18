import { applyMiddleware, combineReducers, compose, createStore, } from "redux";
//@ts-ignore
import AuthReducer from "./Auth-reducer.ts";
//@ts-ignore
import friendsReducer from "./Friends-reducer.ts";
//@ts-ignore
import messagesReducer from "./Messages-reducer.ts";
//@ts-ignore
import profileReducer from "./Profile-reducer.ts";
import thunkMiddleware from 'redux-thunk'
//@ts-ignore
import appReducer from "./App-reducer.ts";




let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    auth: AuthReducer,
    app: appReducer
})
export type rootReducerType = typeof rootReducer // (globalState: stateType) => StateType
export type stateType = ReturnType<rootReducerType>


//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))




export default store