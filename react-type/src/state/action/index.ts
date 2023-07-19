import { ActionTypes } from "../action-types";
import { CellTypes } from "../cell";
export interface MoveCellAction {
  type: ActionTypes.MOVE_CELL;
  payload: {
    id: string;
    direction: "up" | "down";
  };
}
export interface DeleteCellAction {
  type: ActionTypes.DELETE_CELL;
  payload: string;
}
export interface InsertCellAffterAction {
  type: ActionTypes.INSER_CELL_AFTER;
  payload: {
    id: string | null;
    type: CellTypes;
  };
}
export interface UpdateCellAction {
  type: ActionTypes.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
}
export interface BundleStartAction {
  type: ActionTypes.BUNDLE_START;
  payload: {
    cellId: string;
  };
}
export interface BundleCompleteAction {
  type: ActionTypes.BUNDLE_COMPLETE;
  payload: {
    cellId: string;
    bundle: {
      code: string;
      err: string;
    };
  };
}
export type Action =
  | MoveCellAction
  | DeleteCellAction
  | InsertCellAffterAction
  | UpdateCellAction
  | BundleStartAction
  | BundleCompleteAction;
