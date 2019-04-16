import React from 'react'
import Button from '@material-ui/core/Button'

const CSAAbout = ({csa, canEdit}) => {
  return(
    <div>
      <div>Agricultores:</div>
      {csa.users.map( (user, index) => <div key={index}><span>{user.firstname} {user.lastname}</span></div> )}
      <br/>

      <div>Trabalhadores rurais:</div>
      {csa.users.map( (user, index) => <div key={index}><span>{user.firstname} {user.lastname}</span></div> )}
      <br/>

      <div>Tipo de produção:</div>
      {canEdit ? <Button>Editar</Button> : null}
      <br/>

      <div>Cotas disponíveis?</div>
      <br/>
      <hr/>

      <div>Pontos de convivência:</div>
      {canEdit ? <Button>Editar</Button> : null}
      <hr/>

      <div>Sobre {csa.name}:</div>
      {canEdit ? <Button>Editar</Button> : null}
      <p>{csa.description}</p>
      <hr/>

      <div>Fotos: </div>
      {canEdit ? <Button>Editar</Button> : null}
      <hr/>

      <div>Vídeos: </div>
      {canEdit ? <Button>Editar</Button> : null}
      <hr/>

      <div>Contato: </div>
      {canEdit ? <Button>Editar</Button> : null}
      <hr/>

      <div>Dúvidas frequentes: </div>
      {canEdit ? <Button>Editar</Button> : null}

    </div>
  )
}

export default CSAAbout
