import React from "react";
import styled from "styled-components";

interface GrameFrameProps {
  frameDataTable: number[][];
}

// px
const blockSize = 50;

const GameFrame: React.FC<GrameFrameProps> = ({ frameDataTable }) => {
  const width = frameDataTable[0].length * blockSize;
  const height = frameDataTable.length * blockSize;

  return (
    <Wrapper>
      <Frame width={`${width}px`} height={`${height}px`}>
        부엉이
      </Frame>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-contents: center;
`;

interface FrameProps {
  width: string;
  height: string;
}

const Frame = styled.div`
  border: 1px solid lightgray;
  height: ${(props: FrameProps) => (props.height ? props.height : "700px")};
  width: ${(props: FrameProps) => (props.width ? props.width : "500px")};
`;

export default GameFrame;
