import { useState } from "react";
import frameDataTable from "./FrameDataTable";

type GrameFrame = number[][];

const useMainLoopGenerator = (): GrameFrame => {
  const [gameFrame, setGameFrame] = useState<GrameFrame>(frameDataTable);

  setInterval(() => {
    console.log("부엉부엉");
  }, 600);

  return gameFrame;
};

export default useMainLoopGenerator;
