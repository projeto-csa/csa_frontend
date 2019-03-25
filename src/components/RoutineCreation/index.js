import React from 'react'
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router-dom'
import request from './request.js'

class RoutineCreation extends React.Component {
  constructor(){
    super()
    this.state = {
      name: '',
      description: ''
    }
  }

  handleChange = (attribute) => {
    return (e) => {
      this.setState({[attribute]: e.target.value})
    }
  }

  handleData = (data) => {
    console.log('routine data:', data)
    this.setState({routine: data})
  }

  onClick = () => {
    let payload = {
      name: this.state.name,
      description: this.state.description
    }
    request(payload, this.handleData)
  }

  render(){
    return(
      <div>
        <h1>Nova Rotina</h1>
        <label>Nome</label><br/>
        <input type='text' placeholder='Titulo' onChange={this.handleChange('name')} /><br/>
        <textarea placeholder='Insira a descrição' onChange={this.handleChange('description')}/><br/>
        <Button onClick={this.onClick}>Criar</Button>
        <Button>Cancelar</Button>
        {this.state.routine ? <Redirect to={{pathname:`/rotina/${this.state.routine._id}`, state: this.state.routine}} /> : null}
      </div>
    )
  }
}

export default RoutineCreation
