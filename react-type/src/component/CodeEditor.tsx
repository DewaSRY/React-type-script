import { useRef } from "react";
import "./CodeEditor.css";
// import prettier from "prettier";
// import parser from "prettier/parser-babel";
import Editor, { EditorDidMount } from "@monaco-editor/react";
import { Resizable } from "./Resizable";
interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}
export function CodeEditro({ initialValue, onChange }: CodeEditorProps) {
  const editorRef = useRef<any>();
  const oneditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent(() => {
      onChange(getValue());
    });
    monacoEditor.getModel()?.updateOptions({ tabSize: 2 });
  };
  // const onFormatClick = async () => {
  //   const unFormatted = editorRef.current.getModel().getValue();
  //   console.log(editorRef.current);
  //   const formatted = await prettier.format(unFormatted, {
  //     parser: "babel",
  //     semi: true,
  //     singleQuote: true,
  //     // plugins: [parser],
  //   });
  //   const noWhiteSpaceFormated = formatted.replace(/\n$/, "");
  //   editorRef.current.setValue(noWhiteSpaceFormated);
  // };

  return (
    <div className="editor-wrapper">
      <button
        className="button button-format is-primary is-small"
        // onClick={onFormatClick}
      >
        Format
      </button>
      <Resizable direction="horizontal">
        <Editor
          editorDidMount={oneditorDidMount}
          value={initialValue}
          height="100%"
          language="javascript"
          theme="dark"
          options={{
            wordWrap: "on",
            minimap: {
              enabled: false,
            },
            showUnused: false,
            folding: false,
            lineNumbersMinChars: 3,
            automaticLayout: true,
          }}
        />
      </Resizable>
    </div>
  );
}
