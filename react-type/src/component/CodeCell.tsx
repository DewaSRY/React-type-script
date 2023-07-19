import { useEffect } from "react";
import { CodeEditro } from "./CodeEditor";
import { Preview } from "./Preview";
import { Resizable } from "./Resizable";
import { Cell } from "../state";
import "./CodeCell.css";
import { useAction, useBundlerSelector, useCumulativeCode } from "../hooks";
interface CodeCellProps {
  cell: Cell;
}
export const CodeCell = ({ cell }: CodeCellProps) => {
  const { bundle } = useBundlerSelector();
  const { cumulativeCells } = useCumulativeCode(cell.id);
  const bundler = bundle[cell.id];

  const { updateCell, createBundler } = useAction();
  useEffect(() => {
    const timer = setTimeout(async () => {
      createBundler(cell.id, cumulativeCells);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cell.id, cumulativeCells, createBundler]);
  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: "95%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <CodeEditro
          initialValue={cell.content}
          onChange={(value) => updateCell(cell.id, value)}
        />
        <div className="proggress-wraper">
          {!bundler || bundler.loading ? (
            <div className="progress-cover">
              <progress className="progress is-small is-primary" max={100}>
                loading
              </progress>
            </div>
          ) : (
            <Preview
              code={bundler.code || ""}
              errorStatus={bundler.err || ""}
            />
          )}
        </div>
      </div>
    </Resizable>
  );
};
