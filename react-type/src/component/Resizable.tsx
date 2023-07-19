import "./Resizable.css";
import { useEffect, useState } from "react";
import { ResizableBox, ResizableBoxProps } from "react-resizable";
interface ResizableProps {
  direction: "horizontal" | "vertical";
  children?: React.ReactNode;
}
export const Resizable = ({ direction, children }: ResizableProps) => {
  const [innerHeight, setInnerHeight] = useState<number>(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
  const [stateWidth, setStateWidth] = useState<number>(
    window.innerWidth * 0.75
  );
  let resizableprops: ResizableBoxProps = {} as ResizableBoxProps;
  useEffect(() => {
    let timer: any;
    const listener = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);
        if (window.innerWidth * 0.75 > stateWidth) {
          setStateWidth(window.innerWidth * 0.75);
        }
      }, 750);
    };
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [stateWidth]);
  if (direction === "horizontal") {
    resizableprops = {
      className: "resize-horizontal",
      minConstraints: [innerWidth * 0.2, Infinity],
      maxConstraints: [innerWidth * 0.9, Infinity],
      width: stateWidth,
      onResizeStop: (event, data) => {
        setStateWidth(data.size.width);
      },
      height: Infinity,
      resizeHandles: ["e"],
    };
  } else if (direction === "vertical") {
    resizableprops = {
      minConstraints: [Infinity, innerHeight * 0.1],
      maxConstraints: [Infinity, innerHeight * 0.9],
      width: Infinity,
      height: 300,
      resizeHandles: ["s"],
    };
  }
  return <ResizableBox {...resizableprops}>{children}</ResizableBox>;
};
