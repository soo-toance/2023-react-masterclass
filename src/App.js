
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  weight: 100vw;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  } 
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items:center;
  animation: ${rotationAnimation} 1s linear infinite;

  ${Star} {
    &:hover { // span:hover 와 동일 
      font-size: 36px;
    }
  }
`;

const Star = styled.span`
  font-size: 100px;
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Star>*</Star>
      </Box>
    </Wrapper>
  );
}
export default App;
