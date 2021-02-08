import { useProtectedPage } from "../../hookcs/useProtectedPage";
import { goToTravelPage } from "../../routes/Coordinator";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import useModal from "../../hookcs/useModal";
import { Modal } from "../../components/Modal/Modal";
import {
  TravelMain,
  TravelContainer,
  TravelContent, Text, Button,
} from "../../assets/styled/TravelStyled";

function TravelDetailPage() {
  const [tripDetail, setTripDetail] = useState();
  const history = useHistory();
  const pathParams = useParams();
  useProtectedPage();

  const [showModal, openModal, setShowModal] = useModal();

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

  // const applyButton = () => {
  //   axios
  //   .get(
  //     `https://us-central1-labenu-apis.cloudfunctions.net/labeX/allison-marques/trip/${pathParams.id}`,
  //     {
  //       headers: {
  //         auth: token,
  //       },
  //     }
  //   )
  //   .then((res) => {
  //     setTripDetail(res.data.trip);
  //   })
  //   .catch((err) => {
  //     console.log("Error: ", err.message);
  //   });
  // }

  // const getTripsDetail = useGetRequestData(
  //   `https://us-central1-labenu-apis.cloudfunctions.net/labeX/allison-marques/trip/${pathParams.id}`,
  //   {}
  // );

  // useEffect( () => {
  //   setTripDetail(getTripsDetail)

  return (
    <TravelMain padding="70">
      {tripDetail ? (
        <TravelContainer>
          <TravelContent>
            <button onClick={() => goToTravelPage(history)}>
              VOLTAR A VIAGENS
            </button>

            {tripDetail && <Text margin="15px 5px" size="28px">{tripDetail.planet}</Text>}
            {tripDetail && <Text margin="15px 5px" >{tripDetail.name}</Text>}
            {tripDetail && <Text margin="15px 5px" >{tripDetail.date}</Text>}
            {tripDetail && <Text margin="15px 5px" >{tripDetail.description}</Text>}
            {tripDetail && <Text margin="15px 5px" >{tripDetail.durantionDays}</Text>}

            <Button onClick={openModal}>CANDIDATAR-SE A VAGA</Button>

            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              openModal={openModal}
            />
          </TravelContent>
        </TravelContainer>
      ) : (
        <Loading />
      )}
    </TravelMain>
  );
}

export default TravelDetailPage;
