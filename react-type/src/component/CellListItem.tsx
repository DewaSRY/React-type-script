import { Cell } from "../state";
import { CodeCell } from "./CodeCell";
import { TextEditor } from "./TextEditor";
import { ActionBarr } from "./ActionBarr";
import "./CellListItems.css";

interface CellListItemProps {
  cell: Cell;
}
export const CellListItem = ({ cell }: CellListItemProps) => {
  let ChildeCell: JSX.Element = <></>;
  if (cell.type === "code") {
    ChildeCell = <CodeCell cell={cell} />;
  } else if (cell.type === "text") {
    ChildeCell = <TextEditor cell={cell} />;
  }

  return (
    <div className="cell-list-items ">
      {ChildeCell} <ActionBarr id={cell.id} />{" "}
    </div>
  );
};
