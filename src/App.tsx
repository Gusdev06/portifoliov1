import { Cabecalho } from "./components/Cabecalho";
import { Menu } from "./components/Menu";
import { About } from "./components/about";
import { Container, GlobalStyle } from "./styles/styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Cabecalho />
        <Menu></Menu>
        <About></About>
      </Container>
    </>
  );
}

export default App;
