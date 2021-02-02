import { useHistory } from "react-router-dom";
import { goToLoginUserPage, goToTravelPage, goToFaqPage, goToRegisterUser, goToResgisterTravels } from "../../routes/Coordinator";

function HomePage() {

  const history = useHistory()

  return (
    <div>
      <h1>Home</h1>

      <button onClick={ () => goToFaqPage(history)}>duvida</button>

      <button onClick={ () => goToTravelPage(history)}>viagens</button>

      <button onClick={ () => goToRegisterUser(history)}>cadastrar user</button>

      <button onClick={ () => goToResgisterTravels(history)}>isncrição viagem</button>
     
      <button onClick={ () => goToLoginUserPage(history)}>Login user</button>

    </div>
  );
}

export default HomePage;
