import React from "react";
import GameFrame from "./GameFrame";
import "./App.css";
import frameDataTable from "./FrameDataTable";

const App: React.FC = () => {
  return (
    <div className="App">
      <p>이것은 테트리스다</p>
      <GameFrame frameDataTable={frameDataTable} />
    </div>
  );
};

export default App;
