import { applyMiddleware, combineReducers, compose, createStore, Store, } from "redux";
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
import { ProfileReducerinitialStateType } from "./Profile-reducer";
import { AppReducerInitialStateType } from "./App-reducer";
import { FriendsReducerInitialStateType } from "./Friends-reducer";
import { AuthReducerInitialStateType } from "./Auth-reducer";
import { initialStateMessagesType } from "./Messages-reducer";




let rootReducer = combineReducers<{ profilePage: ProfileReducerinitialStateType, messagesPage: initialStateMessagesType, friendsPage: FriendsReducerInitialStateType, auth: AuthReducerInitialStateType, app: AppReducerInitialStateType }>({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    auth: AuthReducer,
    app: appReducer
}
)
export type rootReducerType = typeof rootReducer // (globalState: stateType) => StateType
export type stateType = ReturnType<rootReducerType>

// Смотри урок 9
//type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
//export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
//Делают одно и то же

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
//@ts-ignore
window.store = store



export default store