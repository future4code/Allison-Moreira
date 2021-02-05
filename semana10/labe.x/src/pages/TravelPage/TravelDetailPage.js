import { useGetRequestData } from "../../hookcs/useGetRequestData";
import styled from "styled-components";
import { useProtectedPage } from "../../hookcs/useProtectedPage";

const Test = styled.div`
  border: 1px solid red;
`;

function TravelDetailPage(id) {
  useProtectedPage();
  const token = localStorage.getItem("token")
  console.log("Pegando", token)

  const getTripsDetail = useGetRequestData(
    `https://us-central1-labenu-apis.cloudfunctions.net/labeX/allison-marques/trip/${token}`,
    []
  );

console.log("API: ",getTripsDetail)

  return (
    <div>

      
      <h1>DETALHE</h1>
      KJDKSJDKSJDKSDJ
     
    </div>
  );
}

export default TravelDetailPage;
