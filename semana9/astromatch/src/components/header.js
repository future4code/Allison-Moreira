import { Header } from "../styleds/homeStyleds";
import ButtonClear from "../services/putClear";

function AppBar(props) {
  return (
    <Header>
      <button onClick={props.goToPageProfile}>Profile</button>
      <p>AppMatch</p>
      <ButtonClear />
      <button onClick={props.goToPageMatch} >Matchs</button>
    </Header>
  );
}

export default AppBar;
