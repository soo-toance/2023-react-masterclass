import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box1 = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const Box2 = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`

function App() {
  return (
    <Father>
        <Box1 />
        <Box2 />
    </Father>
  );
}
export default App;
