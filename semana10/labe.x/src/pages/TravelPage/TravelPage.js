import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function TravelPage() {
  const [trips, setTrips] = useState({});
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    console.log("Hooks das proteções de tela");
    console.log("Loading - ocultar");

    if (token === null) {
      history.push("/login");
    } 

    getTrips();
  }, [history]);

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
