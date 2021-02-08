import {
  HomeMain,
  HomeStyled,
  Site,
  Img,
  Div,
  Text,
} from "../../assets/styled/HomeStyled";
import { Button } from "../../assets/styled/HeaderStyled";
import { goToRegisterUser } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";

function HomePage() {

  const history = useHistory();

  return (
    <HomeStyled>
      <HomeMain>
        <Div>
          <Text fontSize="42">VOO ESPACIAL HUMANO</Text>
          <Text fontSize="30">TORNANDO A VIDA MULTIPLANETÁRIA</Text>
          <Text fontSize="18">
            A LabeX também oferece voos comerciais para passageiros particulares
            para a órbita terrestre e lunar. <br />
            <br /> Para começar a planejar sua viagem, faça seu cadastro agora!
            .
          </Text>
          <Button
            color="white"
            radius="0.5em;"
            borderBottom="3px solid rgb(0, 0, 40)"
            borderBottomActive="3px solid rgb(234, 29, 44)"
            bgColor="rgb(0, 0, 0)"
            shadow="1px 0.5px 0px 1px rgb(0, 0, 0, 0.5)"
            shadowActive="0 0 0 #930, inset 5px 5px 5px #9a0712"
            padding="10px 40px;"
            translate="translate(3px, 3px)"
            onClick={() => goToRegisterUser(history)}
          >
            cadastre-se
          </Button>
        </Div>
        <Site>
          <Img class="suit" src="https://i.ibb.co/yVfJ1TJ/watney.png" />
        </Site>
      </HomeMain>
    </HomeStyled>
  );
}

export default HomePage;
