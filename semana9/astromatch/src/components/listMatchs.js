import { Cards, Main } from "../styleds/listStyleds";
import DadosProfile from "./dadosProfile";

export default function ListMatchs(props) {
  return (
    <>
      <Main key={props.matches.id}>
        {props.matches.map( p => {
          return(
            <Cards>
              { props.matches && <DadosProfile info={props.matches} />}
            </Cards>
          )}
        )}
      </Main>
    </>
  );
}
