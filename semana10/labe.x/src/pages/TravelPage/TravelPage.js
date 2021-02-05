import axios from "axios";
import { useEffect, useState } from "react";
import { useProtectedPage } from "../../hookcs/useProtectedPage";

function TravelPage() {
  const [trips, setTrips] = useState({});
  console.log("Loading - ocultar");

  useProtectedPage()
  useEffect(() => {
    getTrips();
  });

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/allison-marques/trips",
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Viagens</h1>
    </div>
  );
}

export default TravelPage;
