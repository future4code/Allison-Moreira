import React from "react";
import axios from "axios";

export default function ClearMatches() {

  const sendClear = () => {
    axios
      .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/allison-marques/clear")
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
