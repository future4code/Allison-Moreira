import { useHistory } from "react-router-dom";
import { goToLoginUserPage, goToTravelPage, goToFaqPage, goToRegisterUser, goToResgisterTravels } from "../../routes/Coordinator";

function Header() {

  const history = useHistory()

  return (
    <div>

      <button onClick={ () => goToFaqPage(history)}>duvida</button>

      <button onClick={ () => goToTravelPage(history)}>viagens</button>

      <button onClick={ () => goToRegisterUser(history)}>cadastrar user</button>

      <button onClick={ () => goToResgisterTravels(history)}>isncrição viagem</button>
     
      <button onClick={ () => goToLoginUserPage(history)}>Login user</button>

    </div>
  );
}

export default Header;
