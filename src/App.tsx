import React, { useState } from "react"
import Circle from "./Circle";
import styled, { createGlobalStyle } from "styled-components"
import Router from "./Router";

const GlobalStyle = createGlobalStyle`
  body {
    color: red;
  }
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
      </Router>
    </>
  );
}

export default App;
