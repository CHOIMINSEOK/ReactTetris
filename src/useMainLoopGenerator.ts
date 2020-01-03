import { useState } from "react";
import frameDataTable from "./FrameDataTable";
import useKey from "./useKeyboardInput";

type GrameFrame = number[][];

const useMainLoopGenerator = (): GrameFrame => {
  const [gameFrame, setGameFrame] = useState<GrameFrame>(frameDataTable);

  const up = useKey("ArrowUp");
  const down = useKey("ArrowDown");
  const left = useKey("ArrowLeft");
  const right = useKey("ArrowRight");

  setInterval(() => {
    console.log("부엉부엉");
  }, 600);

  return gameFrame;
};

export default useMainLoopGenerator;
