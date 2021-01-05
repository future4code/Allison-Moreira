import React from "react";
import './index.css'
import Obrigado from './components/Obrigado'
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'

export default class App extends React.Component {
  state = {
    nextPage: 1
    }
  
 
    renderizaEtapa = () => {
      switch (this.state.nextPage) {
        case 1: 
          return <Etapa1 />
        case 2: 
          return <Etapa2 />
        case 3: 
          return <Etapa3 />
        case 4: 
          return <Obrigado />
        default:
          return <Obrigado />
    }
  }

  proximaEtapa = () => {
    this.setState({ nextPage: this.state.nextPage + 1 });
  };


  render() {
    return <div>

      {this.renderizaEtapa()}
      <br />
      {this.state.nextPage !== 4 && (
          <button onClick={this.proximaEtapa}>Próxima etapa</button>
        )}
    
    </div>  
  }
}
