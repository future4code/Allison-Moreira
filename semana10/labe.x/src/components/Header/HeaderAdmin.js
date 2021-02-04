import { useHistory } from "react-router-dom";
import {
  goToHomePage,
  goToAdminCreateTrip,
  goToAdminHomePage,
} from "../../routes/Coordinator";
import {
  HeaderStyled,
  HeaderDiv,
  Button,
} from "../../assets/styled/HeaderStyled";

function HeaderAdmin() {
  const history = useHistory();

  return (
    <HeaderStyled>
      <HeaderDiv flex="">
        <img alt="MENU ADMIN" onClick={() => goToAdminHomePage(history)} />
      </HeaderDiv>
      <HeaderDiv flex="">
        <Button
          pBottom="15"
          pBottomActive="15"
          onClick={() => goToHomePage(history)}
        >
          INICIO Cliente
        </Button>
        <Button
          pBottom="15"
          pBottomActive="15"
          onClick={() => goToAdminCreateTrip(history)}
        >
          CRIAR VIAGENS
        </Button>

      </HeaderDiv>
    </HeaderStyled>
  );
}

export default HeaderAdmin;
