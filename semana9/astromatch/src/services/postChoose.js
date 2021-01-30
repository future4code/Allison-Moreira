import React, { useState, useEffect } from "react";
import axios from "axios";
import SendMatchs from "../components/buttonMatch";

export default function ChooseMatches(props) {
  const [dadosMatch, setDadosMatch] = useState({});

  const getDadosMatch = (id) => {

    console.log("props aqui: ", props.idProfile.id)
    id = props.idProfile.id

    const body = {
      "id": `${id}`,
      "choice": true, 
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/allison-marques/choose-person",
        body, 
      )
      .then((res) => {
          console.log("ismatch", res.data.isMatch)
          console.log("dados", dadosMatch)
        setDadosMatch(res.data.isMatch);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDadosMatch();
  }, []);

  return (
    <div>
      <SendMatchs matches={dadosMatch} />
    </div>
  );
}
