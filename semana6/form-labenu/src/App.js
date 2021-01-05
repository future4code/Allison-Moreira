import React from "react";
import Obrigado from './components/Obrigado'
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'

export default class App extends React.Component {
  state = {
    nextPage: 1
    })
  }
  // fazerLogin = () => {
  //   this.setState({ estaLogado: true });
  // };

  // fazerLogout = () => {
  //   this.setState({ estaLogado: false });
  // };

  render() {
    const formLabenu = () => {
      if (this.state.nextPage === 1) {
        return <Etapa1 botaoNext={this.newNextPage} />
      } else if (this.state.nextPage === 2) {
        return <Etapa2 botaoNext={this.newNextPage} />
      } else if (this.state.nextPage === 3) {
        return <Etapa3 botaoNext={this.newNextPage} />
      } else if (this.state.nextPage === 4) {
        return <Obrigado />
      }
    };

    return <div className="App">

      {formLabenu()}
    
    </div>;
  }
}
