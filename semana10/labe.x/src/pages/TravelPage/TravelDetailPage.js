// import { useGetRequestData } from "../../hookcs/useGetRequestData";
// import styled from "styled-components";
import { useProtectedPage } from "../../hookcs/useProtectedPage";
import { goToTravelPage } from "../../routes/Coordinator";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TravelDetailPage() {
  const [tripDetail, setTripDetail] = useState();
  const history = useHistory();
  const pathParams = useParams();
  useProtectedPage();

  const token = localStorage.getItem("token");

  useEffect(() => {
    getTripsDetail();
  }, []);

  const getTripsDetail = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/allison-marques/trip/${pathParams.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        setTripDetail(res.data.trip);
      })
      .catch((err) => {
        console.log("Error: ", err.message);
      });
  };

  return (
    <div>
      <button onClick={() => goToTravelPage(history)}>
        (- VOLTAR A VIAGENS
      </button>

      <h1>DETALHE</h1>

      { tripDetail && <p>{tripDetail.name}</p>}
      { tripDetail && <p>{tripDetail.date}</p>}
      { tripDetail && <p>{tripDetail.description}</p>}
      { tripDetail && <p>{tripDetail.durantionDays}</p>}
      { tripDetail && <p>{tripDetail.planet}</p> }
      
      <button> CANDIDATAR-SE A VAGA </button>

    </div>
  );
}

export default TravelDetailPage;
