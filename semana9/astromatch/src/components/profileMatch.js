import { Main, Position } from "../styleds/profileStyleds";
import DadosProfile from "./dadosProfile";

export default function ProfileMatch(props) {
  return (
    <>
      <Main bgMain={props.profile.photo}>
        <Position>
          <DadosProfile info={props.profile} />
        </Position>
      </Main>
    </>
  );
}
