import { Cards, Main } from "../styleds/listStyleds";
import DadosProfile from "./dadosProfile";

export default function ListMatchs(props) {
  return (
    <>
      <Main>
        {props.matches.map( p => {
          return(
            <Cards key={props.matches.id}>
              { console.log("List MATCHS: ", props.matches) && <DadosProfile info={props.matches} />}
            </Cards>
          )}
        )}
      </Main>
    </>
  );
}
