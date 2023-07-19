import { combineReducers } from "redux";
import { cellsReducer } from "./cell.reducer";
import { bundleReducer } from "./bundlles.reducer";
export const reducer = combineReducers({
  cells: cellsReducer,
  bundle: bundleReducer,
});
export type rootState = ReturnType<typeof reducer>;
export * from "./cell.reducer";
