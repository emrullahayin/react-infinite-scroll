import React from "react";
import styled from "styled-components";

import "normalize.css";
import "./App.scss";

const columnsStyle = {
  transition: "all .5s ease-in-out",
  columnGap: "30px",
  columnFll: "initial"
};

const figureStyle = {
  marginBottom: "30px",
  display: "inline-block",
  verticalAlign: "top"
};

const imageStyle = {
  transition: "all .5s ease-in-out",
  backfaceVisibility: "hidden",
  maxWidth: "100%",
  verticalAlign: "middle"
};

const App = () => {
  return (
    <div className="columns" style={columnsStyle}>
      <figure style={figureStyle}>
        <img
          style={imageStyle}
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
    </div>
  );
};

export default App;
