import Main from "./components/Main";
import TopBar from "./components/TopBar";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <TopBar />
      <Main />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  //border: 1px solid black;
  background-color: #e8fbff;
`;
