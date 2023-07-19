import { useState, useEffect, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Cell } from "../state";
import "./TextEditor.css";
import { useAction } from "../hooks";
interface TextEditorProps {
  cell: Cell;
}
export const TextEditor = ({ cell }: TextEditorProps) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState<boolean>(false);
  const { updateCell } = useAction();
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const curentEditor = editorRef.current;
      const eventTarget = event.target as Node;
      const notEditorElement =
        curentEditor && eventTarget && curentEditor.contains(eventTarget);
      if (notEditorElement) return;
      setEditing(false);
    };
    document.addEventListener("click", listener, { capture: true });
    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);
  if (editing) {
    return (
      <div className="text-editor" ref={editorRef}>
        <MDEditor
          value={cell.content}
          onChange={(valuueset) => updateCell(cell.id, valuueset || "")}
        />
      </div>
    );
  }
  return (
    <div className="text-editor card" onClick={() => setEditing(!editing)}>
      <div className="card-content">
        <MDEditor.Markdown source={cell.content || "Click to Edit"} />
      </div>
    </div>
  );
};
