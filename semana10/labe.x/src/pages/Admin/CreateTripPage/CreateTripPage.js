import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function AdminCreateTripPage() {
  const [infoError, setInfoError] = useState("");
  const history = useHistory();

  const CreateTrip = () => {
    const body = {
      name: "Ano novo em Mercúrio",
      planet: "Mercúrio",
      date: "31/12/2019",
      description: "Venha passar a virada pertinho do Sol!",
      durationInDays: 7,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/allison-marques/trips",
        body
      )
      .then((res) => {
        // window.localStorage.setItem("token", res.data.token);
        console.log("CONSEGUE REGISTAR A VIAGEM");
        console.log("res", res.data);
      })
      .catch((err) => {
        console.log("NÃO ESTÁ CADASTRANDO");
        setInfoError(err);
      });
  };

  return (
    <div>
      <div>Criar Viagens</div>
      <button onClick={() => CreateTrip()}>CADASTRAR VIAGEM</button>
      {infoError}
    </div>
  );
}

export default AdminCreateTripPage;
