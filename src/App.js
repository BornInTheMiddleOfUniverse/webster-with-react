import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

function App() {
  return (
    <div>
      <h1>Welcome to the Webster world!</h1>
      <Father>
        <Box bgColor="teal" />
        <Circle bgColor="tomato"></Circle>
      </Father>
    </div>
  );
}

export default App;
