import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { RootReducer } from "./root.reducer";
const middlewares=applyMiddleware(thunk)
export const store=createStore(RootReducer,{},middlewares)

export * from "./reducer"
export * from "./root.reducer"