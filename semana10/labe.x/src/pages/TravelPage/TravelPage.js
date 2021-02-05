import { useGetRequestData } from "../../hookcs/useGetRequestData";
import styled from "styled-components";
import { useProtectedPage } from "../../hookcs/useProtectedPage";
import { goToTravelDetailPage } from '../../routes/Coordinator'
import { useState } from "react";
import { Link, useHistory } from 'react-router-dom'

const Test = styled.div`
  border: 1px solid red;
`;

function TravelPage(id) {
  useProtectedPage();

  const history = useHistory()

  const getTrips = useGetRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/allison-marques/trips",
    {}
  );

  return (
    <div>
      <h1>Viagens</h1>

      { getTrips.trips ? (
        getTrips.trips.map((p) => {
          return (
            <Test>
            {/* ID VER: <Link to={`/viagens/id/${p.id}`} > VER </Link> */}
            <button onClick={() => goToTravelDetailPage(history, p.id)} >VER</button>
            <p>Nome: {p.name}</p>
          </Test>
          );
        })
      ) : (
        <p>Carregando...</p>
      )}

    </div>
  );
}

export default TravelPage;
