import React, { useState, useEffect } from "react";
import axios from "axios";
import SendMatchs from "../components/buttonMatch";

export default function DadosMatches(props) {
  const [dados, setDados] = useState({});

//   const [like, setLike] = useState(false);
//   const [unLike, setUnLike] = useState(true);

//   const ClickLike = () => {
//       setLike(!like)
//       setDados(like)
//   }

//   const ClickUnLike = () => {
//     setUnLike(!unLike)
//     setDados(unLike)
// }

  const sendDados = (id) => {
    const body = {
      id: `${id}`,
      choice: true,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/allison-marques/choose-person",
        body
      )
      .then((res) => {
        console.log("GOSTOU? ", res.data.isMatch);
        alert("Gostou, né?");
        setDados(res.data.isMatch);
      })
      .catch((err) => {
        alert("vamos para próxima!");
        console.log(err);
      });
  };

  useEffect(() => {
    sendDados();
  }, []);

  return (
    <div>
      <SendMatchs matches={dados} sendDados={sendDados.bind(this)} />
    </div>
  );
}
