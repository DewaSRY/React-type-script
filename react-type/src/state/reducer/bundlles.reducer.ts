import { produce } from "immer";
import { ActionTypes } from "../action-types";
import { Action } from "../action";

interface BundlesState {
  [key: string]: {
    loading: boolean;
    code: string;
    err: string;
  };
}
const InitialState: BundlesState = {};
export const bundleReducer = produce((state = InitialState, action: Action) => {
  const { payload, type } = action;
  switch (type) {
    case ActionTypes.BUNDLE_START:
      state[payload.cellId] = {
        loading: true,
        code: "",
        err: "",
      };
      return state;
    case ActionTypes.BUNDLE_COMPLETE:
      state[payload.cellId] = {
        loading: false,
        ...payload.bundle,
      };
      return state;
    default:
      return state;
  }
}, InitialState);
