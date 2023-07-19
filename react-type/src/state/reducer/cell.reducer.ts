import { produce } from "immer";
import { ActionTypes } from "../action-types";
import { Action } from "../action";
import { Cell } from "../cell";
export interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
}
const InitialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};
export const cellsReducer = produce(
  (state: CellsState = InitialState, action: Action): CellsState => {
    const { payload, type } = action;
    switch (type) {
      case ActionTypes.DELETE_CELL:
        delete state.data[payload];
        state.order = state.order.filter((id) => id !== payload);
        return state;
      case ActionTypes.MOVE_CELL:
        const { direction } = payload;
        const index = state.order.findIndex((idx) => idx === payload.id);
        const targetIndex = direction === "up" ? index - 1 : index + 1;
        const orderlastIndex = state.order.length - 1;
        if (targetIndex < 0 || targetIndex > orderlastIndex) return state;
        state.order[index] = state.order[targetIndex];
        state.order[targetIndex] = action.payload.id;
        return state;
      case ActionTypes.INSER_CELL_AFTER:
        const cell: Cell = {
          content: "",
          type: payload.type,
          id: randomId(),
        };
        state.data[cell.id] = cell;
        const foundIndex = state.order.findIndex((idx) => idx === payload.id);
        if (foundIndex < 0) {
          state.order.push(cell.id);
        } else {
          state.order.splice(foundIndex + 1, 0, cell.id);
        }
        return state;
      case ActionTypes.UPDATE_CELL:
        const { id, content } = payload;
        state.data[id].content = content;
        return state;
      default:
        return state;
    }
  },
  InitialState
);
const randomId = () => {
  return Math.random().toString(36).substring(2, 5);
};
