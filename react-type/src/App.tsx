import React, { useEffect } from "react";
import { startServiceBundler } from "./utils";
import { CellList } from "./component";
import "./App.css";

const App: React.FC = () => {
  useEffect(() => {
    startServiceBundler();
    return;
  }, []);

  return (
    <div className="containers">
      <CellList />
    </div>
  );
};

export default App;
