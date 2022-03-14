import { combineReducers, createStore, } from "redux";
import messagesReducer from "./Messages-reducer";
import profileReducer from "./Profile-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
})
let store = createStore(reducers);





export default store