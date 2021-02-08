import { useHistory } from "react-router-dom";
import {
  goToHomePage,
  goToLoginUserPage,
  goToTravelPage,
  goToFaqPage,
  goToRegisterUser,
  goToAdminHomePage,
  goToLogout,
} from "../../routes/Coordinator";
import {
  HeaderStyled,
  HeaderDiv,
  Button,
} from "../../assets/styled/HeaderStyled";
import { useProtectedPage } from "../../hookcs/useProtectedPage";

function Header() {
  const token = localStorage.getItem("token");

  const history = useHistory();

  return (
    <HeaderStyled>
      <HeaderDiv flex="">
        <img alt="logo" onClick={() => goToHomePage(history)} />
      </HeaderDiv>

      <HeaderDiv flex="">
        {token ? (
          <>
            {token === true ? (
              "ok"
            ) : (
              <>
                <Button
                  pBottom="15"
                  pBottomActive="15"
                  onClick={() => goToHomePage(history)}
                >
                  INICIO
                </Button>

                <Button
                  pBottom="15"
                  pBottomActive="15"
                  onClick={() => goToTravelPage(history)}
                >
                  viagens
                </Button>

                {/* <Button
                  pBottom="15"
                  pBottomActive="15"
                  onClick={() => goToFaqPage(history)}
                >
                  duvida
                </Button> */}

                <Button
                  pBottom="15"
                  pBottomActive="15"
                  onClick={() => goToLogout(history, "/login")}
                >
                  Sair
                </Button>
              </>
            )}
          </>
        ) : (
          <>
            {token === false ? (
              "false ok"
            ) : (
              <>
                <Button
                  pBottom="15"
                  pBottomActive="15"
                  onClick={() => goToHomePage(history)}
                >
                  INICIO
                </Button>

                <Button
                  pBottom="15"
                  pBottomActive="15"
                  onClick={() => goToTravelPage(history)}
                >
                  viagens
                </Button>

                {/* <Button
                  pBottom="15"
                  pBottomActive="15"
                  onClick={() => goToFaqPage(history)}
                >
                  duvida
                </Button> */}

                
                <Button
                  color="white"
                  radius="0.5em;"
                  borderBottom="3px solid #9a0712"
                  borderBottomActive="3px solid rgb(234, 29, 44)"
                  bgColor="rgb(234, 29, 44)"
                  shadow="1px 0.5px 0px 1px rgb(0, 0, 0, 0.5)"
                  shadowActive="0 0 0 #930, inset 5px 5px 5px #9a0712"
                  padding="10px 40px;"
                  translate="translate(3px, 3px)"
                  onClick={() => goToLoginUserPage(history)}
                >
                  ENTRAR
                </Button>
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
              </>
            )}
          </>
        )}
      </HeaderDiv>
    </HeaderStyled>
  );
}

export default Header;
