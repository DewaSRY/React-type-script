import "./Preview.css";
import { useRef, useEffect } from "react";
import { HTMLPreview } from "../utils";
interface PreviewProps {
  code: string;
  errorStatus: string;
}

export const Preview = ({ code, errorStatus }: PreviewProps) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.srcdoc = HTMLPreview;
      setTimeout(() => {
        if (iframeRef.current && iframeRef.current.contentWindow) {
          iframeRef.current.contentWindow.postMessage(code, "*");
        }
      }, 50);
    }
  }, [code]);
  if (errorStatus) {
    console.log(errorStatus);
  }
  return (
    <div className="preview-wrapper">
      <iframe
        style={{ backgroundColor: "white" }}
        ref={iframeRef}
        title="code preview"
        srcDoc={HTMLPreview}
        sandbox="allow-scripts"
      />
      {errorStatus && <div className="preview-error">{errorStatus}</div>}
    </div>
  );
};
