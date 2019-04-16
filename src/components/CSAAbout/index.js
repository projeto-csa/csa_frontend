import React from 'react'

const CSAAbout = ({csa}) => {
  return(
    <div>
      <div>Agricultores:</div>
      {csa.users.map( (user, index) => <div key={index}><span>{user.firstname} {user.lastname}</span></div> )}
      <br/>

      <div>Trabalhadores rurais:</div>
      {csa.users.map( (user, index) => <div key={index}><span>{user.firstname} {user.lastname}</span></div> )}
      <br/>

      <div>Tipo de produção:</div>
      <br/>

      <div>Cotas disponíveis?</div>
      <br/>
      <hr/>

      <div>Pontos de convivência:</div>
      <hr/>

      <div>Sobre {csa.name}:</div>
      <p>{csa.description}</p>
      <hr/>

      <div>Fotos: </div>
      <hr/>

      <div>Vídeos: </div>
      <hr/>

      <div>Contato: </div>
      <hr/>

      <div>Dúvidas frequentes: </div>

    </div>
  )
}

export default CSAAbout
