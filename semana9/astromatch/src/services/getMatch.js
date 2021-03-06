import React, { useState, useEffect } from "react";
import axios from "axios";
import ListMatchs from "../components/listMatchs";

export default function DadosMatches(props) {
  const [dadosMatch, setDadosMatch] = useState([]);

  const getMatch = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/allison-marques/matches"
      )
      .then((res) => {
          // console.log("get MATCHES", res.data.matches)
        setDadosMatch(res.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMatch();
  }, []);

  return (
    <div>
      <ListMatchs matches={dadosMatch}  />
    </div>
  );
}
