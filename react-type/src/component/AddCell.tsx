import { useAction } from "../hooks";
import "./AddCell.css";

interface AddCellProps {
  prevCellId: string | null;
}
export function AddCell({ prevCellId }: AddCellProps) {
  const { insertCellAffter } = useAction();
  return (
    <div className="add-cell">
      <div className="divider"></div>
      <div className="add-button">
        <button onClick={() => insertCellAffter(prevCellId, "text")}>
          Text
        </button>
        <button onClick={() => insertCellAffter(prevCellId, "code")}>
          Code
        </button>
      </div>
    </div>
  );
}
