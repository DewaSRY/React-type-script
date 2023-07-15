import {combineReducers} from "redux"
import { repositoryReducers } from "./reducer";
export const RootReducer=combineReducers({
    repository:repositoryReducers
})

export type RootState=ReturnType<typeof RootReducer>
