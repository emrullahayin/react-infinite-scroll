import React from "react";
import styled from "styled-components";

import "normalize.css";
import "./App.scss";

const Wrapper = styled.div`
  transition: all 0.5s ease-in-out;
  column-gap: 30px;
  column-fll: initial;
`;

const Figure = styled.figure`
  margin-bottom: 30px;
  display: inline-block;
  vertical-align: top;
`;

const Image = styled.img`
  transition: all 0.5s ease-in-out;
  backface-visibility: hidden;
  max-width: 100%;
  vertical-align: middle;
`;

const App = () => {
  return (
    <Wrapper>
      <Figure>
        <Image src="//via.placeholder.com/350x150" alt="Placeholder image" />
      </Figure>
      <Figure>
        <Image src="//via.placeholder.com/150x250" alt="Placeholder image" />
      </Figure>
      <Figure>
        <Image src="//via.placeholder.com/300x100" alt="Placeholder image" />
      </Figure>
      <Figure>
        <Image src="//via.placeholder.com/400x200" alt="Placeholder image" />
      </Figure>
      <Figure>
        <Image src="//via.placeholder.com/350x150" alt="Placeholder image" />
      </Figure>
    </Wrapper>
  );
};

export default App;
