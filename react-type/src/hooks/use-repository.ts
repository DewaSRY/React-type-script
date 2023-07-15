import { useDispatch,useSelector,TypedUseSelectorHook } from "react-redux";
import { searchRepositores ,RootState} from "../store"
export const useRipository=()=>{
    const useTypeUseSelector:TypedUseSelectorHook<RootState>=useSelector;
    const {error,data,loading}=useTypeUseSelector((state)=>state.repository);
    const dispatch=useDispatch();
    const hadleSearchRepository=(terms:string)=>{
        dispatch(searchRepositores(terms) as any);
    };
    return{
        hadleSearchRepository,
        data,
        error,
        loading
    }
}