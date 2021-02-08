import { useGetRequestData } from "../../hookcs/useGetRequestData";
import { useProtectedPage } from "../../hookcs/useProtectedPage";
import { goToTravelDetailPage } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import {
  TravelMain,
  TravelContainer,
  TravelContent, Text, Button,
} from "../../assets/styled/TravelStyled";

function TravelPage() {
  useProtectedPage();

  const history = useHistory();

  const getTrips = useGetRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/allison-marques/trips",
    {}
  );

  return (
    <div>
      <TravelMain columns="repeat(1, 1fr)" padding="30px 0" >{getTrips.trips ? <h1>Viagens</h1> : <Loading />}</TravelMain>
      <TravelMain columns="repeat(4, 1fr)" padding="0 20" >
        {getTrips.trips ? (
          getTrips.trips.map((p) => {
            return (
              <>
                <TravelContainer key={p.id}>
                  <TravelContent >
                    <Button onClick={() => goToTravelDetailPage(history, p.id)}>
                      + DETALHES
                    </Button>
                    <Text size="28px" >{p.planet}</Text>
                    <Text size="" >{p.name}</Text>
                    <Text size="" >DATA: VIAGEM {p.date}</Text>
                  </TravelContent>
                </TravelContainer>
              </>
            );
          })
        ) : (
          <Loading />
        )}
      </TravelMain>
    </div>
  );
}

export default TravelPage;
