// import GetApiProfile from "../services/getMatch";
import ButtonMatch from "../components/buttonClear";
import GetApiProfile from "../services/getProfile";
import {Main, Container, ContainerRow, Card, Header, Line} from '../styleds/homeStyleds'

function App() {
  return (
    <Main>
      <Container>
        <ContainerRow>
          <Card>
            <Header>MATCH</Header>
            <Line />
            <GetApiProfile />
          </Card>

          <ButtonMatch/>

        </ContainerRow>
      </Container>
    </Main>
  );
}

export default App;
