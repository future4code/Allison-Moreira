import { Header } from "../styleds/homeStyleds";

function AppBar(props) {
  return (
    <Header>
      <button onClick={props.goToPageProfile}>Profile</button>
      <p>AppMatch</p>
      <button onClick={props.goToPageMatch} >Matchs</button>
    </Header>
  );
}

export default AppBar;
