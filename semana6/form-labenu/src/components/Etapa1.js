import React from "react";

export default class Etapa1 extends React.Component {
  

  render() {

    return (
      <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <form>
          <label>Qual é o seu nome: </label>
          <input />
          <br/>
          <label>Qual é o sua idade: </label>
          <input />
          <br/>
          <label>Qual é o seu email: </label>
          <input />
          <br/>
          <label>Qual é o seu Grau de Escolaridade: </label>
          <input />
          <br/>
        </form>
      </div>
    );
  }
}
