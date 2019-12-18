import React from "react";
import styled from "styled-components";

const GameFrame: React.FC = () => {
  return (
    <Wrapper>
      <Frame>부엉이</Frame>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-contents: center;
`;

const Frame = styled.div`
  border: 1px solid lightgray;
  height: 700px;
  width: 500px;
`;

export default GameFrame;
