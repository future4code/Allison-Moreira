import React from "react";
import axios from "axios";
import SendClear from "../components/buttonClear";

export default function ClearMatches(props) {

  const sendClear = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/allison-marqs/clear"
      )
      .then((res) => {
        console.log(res)
      })
  };

  return (
    <div>
     <button onClick={sendClear}> CLEAR </button>
    </div>
  );
}
