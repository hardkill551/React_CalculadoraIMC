import Calculator from "./components/Calculator";
import styled from "styled-components";
function App() {
  return (
    <AppConfig>
    <Calculator />
    </AppConfig>
  );
}

const AppConfig = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#DDDFFD;
  flex-direction:column;
`
export default App;
