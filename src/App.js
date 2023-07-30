import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Text = styled.span``;

function App() {
  return (
    <Father>
        <Box bgColor="teal">
          <Text>Hello</Text>
        </Box>
        <Box bgColor="tomato" />
    </Father>
  );
}
export default App;
