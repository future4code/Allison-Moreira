import React, { useState, useEffect } from "react";
import axios from "axios";
import SendMatchs from "../components/buttonMatch";

export default function ClearMatches(props) {
  const [Clear, setClear] = useState({});

  const sendClear = () => {
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/allison-marques/choose-person"
      )
      .then((res) => {
        console.log("GOSTOU? ", res.data.isMatch);
        setClear(res.data.matches);
      })
      .catch((err) => {
        alert("vamos para próxima!");
        console.log(err);
      });
  };

  useEffect(() => {
    sendClear();
  }, []);

  return (
    <div>
      <SendMatchs matches={Clear} sendClear={sendClear.bind(this)} />
    </div>
  );
}
