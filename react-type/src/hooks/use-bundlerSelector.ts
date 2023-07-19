import { useSelector, TypedUseSelectorHook } from "react-redux";
import { rootState } from "../state";
export const useBundlerSelector = () => {
  const typeSelector: TypedUseSelectorHook<rootState> = useSelector;
  const bundle = typeSelector((state) => state.bundle);
  // const dispatch = useDispatch();
  // const { createBundler } = bindActionCreators(actionCreators, dispatch);
  // const setCreateBundler= async(id:string,input:string)=>useCallback(  createBundler(id,input),[] )
  return {
    bundle,
  };
};
