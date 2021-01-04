import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import perfil from './img/perfil.jpg';
import face from './img/face.png';
import linkedin from './img/linkedin.png';
import oportunidade from './img/oportunidade.png';
import vmcard from './img/vmcard.png';
import logadouro from './img/logadouro.png';
import email from './img/email.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {perfil}
          nome="Allison Araujo Marques Moreira" 
          descricao="Oi, eu sou o Allison. Sou estudante na Labenu. Programador Fullstack, interessado e apaixonado por aprender coisas novas, autodidata e criativo. "/>
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
          <CardPequeno 
            imagem={email}
            titulo="Email:"
            conteudo="allisonaraujo942@gmail.com"
          />

          <CardPequeno 
            imagem={logadouro}
            titulo="Endereço:"
            conteudo="Rua juiz de fora, 32"
          />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={oportunidade}
          nome="EM BUSCA DE OPORTUNIDADE" 
          descricao="Em busca de uma grande oportunidade para práticar meu conhecimentos e crescer constantemente com a empresa." 
        />
        <CardGrande 
          imagem={vmcard}
          nome="Freelancer - vivamelhor.top" 
          descricao="Desenvolvo aplicações em PHP, resolvendo e aplimorando um sistema web." 
        />
        
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
        imagem= {face}
        texto="Facebook" 
        />        

        <ImagemButton 
        imagem={linkedin}
        texto="Linkedin" 
        />        
      </div>
    </div>
  );
}

export default App;
