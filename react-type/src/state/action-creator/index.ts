import { ActionTypes } from "../action-types";
import { CellTypes } from "../cell";
import { Dispatch } from "redux";
import {
  Action,
  MoveCellAction,
  InsertCellAffterAction,
  DeleteCellAction,
  UpdateCellAction,
  // BundleStartAction,
  // BundleCompleteAction,
} from "../action";
import { bundlerCode } from "../../utils";
export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionTypes.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  };
};
export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionTypes.DELETE_CELL,
    payload: id,
  };
};
export const moveCell = (
  id: string,
  direction: "up" | "down"
): MoveCellAction => {
  return {
    type: ActionTypes.MOVE_CELL,
    payload: {
      id,
      direction,
    },
  };
};
export const insertCellAffter = (
  id: string | null,
  type: CellTypes
): InsertCellAffterAction => {
  return {
    type: ActionTypes.INSER_CELL_AFTER,
    payload: {
      id,
      type,
    },
  };
};
export const createBundler = (cellId: string, input: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.BUNDLE_START,
      payload: {
        cellId,
      },
    });
    const bundleresult = await bundlerCode(input);
    if (!bundleresult) return;
    dispatch({
      type: ActionTypes.BUNDLE_COMPLETE,
      payload: {
        cellId,
        bundle: bundleresult,
      },
    });
  };
};
