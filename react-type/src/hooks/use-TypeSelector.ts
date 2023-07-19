import { useSelector, TypedUseSelectorHook } from "react-redux";
import { rootState } from "../state";
export const useTypeSelector = () => {
  const typeSelector: TypedUseSelectorHook<rootState> = useSelector;
  const { data, loading, error, order } = typeSelector((state) => state.cells);

  return {
    data,
    loading,
    error,
    order,
  };
};
