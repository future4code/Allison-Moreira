import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
           <img src={ props.imagem} width="30" />
           <div>
               <p><strong>{ props.titulo }</strong> { props.conteudo }</p>
           </div>
        </div>
    )
}

export default CardPequeno;