import React from "react";
import styled from "styled-components";

import Images from "./components/Images";

import "normalize.css";
import "./App.scss";

const Wrapper = styled.div`
  transition: all 0.5s ease-in-out;
  column-gap: 30px;
  column-count: 3;
  column-fll: initial;
  padding: 30px;
`;

const App = () => {
  return (
    <Wrapper>
      <Images />
    </Wrapper>
  );
};

export default App;
