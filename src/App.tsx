import React from "react";
import GameFrame from "./GameFrame";
import "./App.css";
import useMainLoopGenerator from "./useMainLoopGenerator";

const App: React.FC = () => {
  const gameFrame = useMainLoopGenerator();

  return (
    <div className="App">
      <p>이것은 테트리스다</p>
      <GameFrame frameDataTable={gameFrame} />
    </div>
  );
};

export default App;
