import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProfileMatch from '../components/profileMatch';

export default function DadosProfile(props) {
  const [dados, setDados] = useState({});

  const getDados = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/allison-marques/person"
      )
      .then((res) => {
        setDados(res.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDados();
  }, []);

  return (
    <div>
      <ProfileMatch profile={dados} />
    </div>
  );
}
