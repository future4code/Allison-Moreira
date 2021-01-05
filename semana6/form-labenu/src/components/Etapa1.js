import React from "react";

export default class Etapa1 extends React.Component {
  

  render() {

    return (
      <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <form>
          <label>Qual é o seu nome: </label>
          <br />
          <input />
          <br/>
          <label>Qual é o sua idade: </label>
          <br />
          <input />
          <br/>
          <label>Qual é o seu email: </label>
          <br />
          <input />
          <br/>
          <label>Qual é o seu Grau de Escolaridade: </label>
          <br />
          <select>
              <option value=''></option>
              <option value='Ensino médio incompleto'>Ensino médio incompleto</option>
              <option value='Ensino médio completo'>Ensino médio completo</option>
              <option value='Ensino superior incompleto'>Ensino superior incompleto</option>
              <option value='Ensino superior completo'>Ensino superior completo</option>
          </select>
          <br/>
        </form>
      </div>
    );
  }
}
