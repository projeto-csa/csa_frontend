import React from 'react'
import Button from '@material-ui/core/Button'
const TopicCreation = (props) => {
  return(
    <div>
      <h1>Novo Tópico</h1>
      <label>Titulo</label><br/>
      <input type='text' placeholder='Titulo' /><br/>
      <textarea placeholder='Insira a descrição' /><br/>
      <Button>Criar</Button>
      <Button>Cancelar</Button>
    </div>
  )
}

export default TopicCreation
