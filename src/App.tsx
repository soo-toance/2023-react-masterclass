import React, { useState } from "react"
import Circle from "./Circle";
import styled from "styled-components"

function App() {
  const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};  
  `;
  const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};  
  `;
  return (
    <div>
      <Container>
        <H1>PROTECTED</H1>
      </Container>
    </div>
  );
}

export default App;
