import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import { ActionTypes } from "./action-types";
export const store = createStore(reducer, {}, applyMiddleware(thunk));

store.dispatch({
  type: ActionTypes.INSER_CELL_AFTER,
  payload: {
    id: null,
    type: "code",
  },
});
store.dispatch({
  type: ActionTypes.INSER_CELL_AFTER,
  payload: {
    id: null,
    type: "code",
  },
});
// store.dispatch({
//   type: ActionTypes.INSER_CELL_BEFORE,
//   payload: {
//     id: null,
//     type: "text",
//   },
// });
const state = store.getState();

console.log(state);
