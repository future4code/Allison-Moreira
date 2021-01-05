import React from "react";

export default class Etapa3 extends React.Component {
  

  render() {

    return (
      <div>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        
        <form>
          <label>7. Por que você não terminou um curso de graduação?</label>
          <br/>
          <input />
          <br />
          <label>8. Você fez algum curso complementar?</label>
          <br/>
          <select>=
              <option value='Nenhum'>Nenhum</option>
              <option value='Curso técnico'>Curso técnico</option>
              <option value='Curso de inglês'>Curso de inglês</option>
          </select>
        </form>
      </div>
    );
  }
}
