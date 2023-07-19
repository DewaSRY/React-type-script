import { useTypeSelector } from "./use-TypeSelector";
import { showFunc, showFunctNoop } from "../utils";
export const useCumulativeCode = (cellId: string) => {
  const { data, order } = useTypeSelector();
  const orderedCells = order.map((id) => data[id]);
  const cumulativeCells: string[] = [];
  for (let cls of orderedCells) {
    if (cls.type === "code") {
      if (cls.id === cellId) {
        cumulativeCells.push(showFunc);
      } else {
        cumulativeCells.push(showFunctNoop);
      }
      cumulativeCells.push(cls.content);
    }
    if (cls.id === cellId) {
      break;
    }
  }
  return {
    cumulativeCells: cumulativeCells.join("\n"),
  };
};
