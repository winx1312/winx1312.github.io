import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";

let rootReducer = combineReducers({
    usersPage: usersReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
type RootReducerType = typeof rootReducer 
export type AppStateType = ReturnType<RootReducerType>
type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: any[])=>any}> = ReturnType<PropertiesTypes<T>>
// @ts-ignore
window.__store__ = store


export default store;