import { Main, Position } from "../styleds/profileStyleds";
import ButtonMatch from '../services/postChoose';
import DadosProfile from "./dadosProfile";

export default function ProfileMatch(props) {
  return (
    <>
      <Main bgMain={props.profile.photo}>
        <Position>
          <DadosProfile info={props.profile} />
        </Position>
      </Main>
      <ButtonMatch />
    </>
  );
}
