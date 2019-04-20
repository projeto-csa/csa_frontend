import React from 'react'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import request from './request.js'

class CSACreator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      localPoint: '',
      description: '',
      csa: null
    }
  }

  handleData = (data) => {
    this.setState({csa: data})
  }

  stepBack = () => {
    //return list with first element removed
    this.setState({step: this.state.step.filter((item, index) => index !== 0 ? true : false )})
  }

  onChange = (field) => (e) => {
    this.setState({[field]: e.target.value})
  }

  createCSA = () => {
    let payload = {
      name: this.state.name,
      localPoint: this.state.local,
      description: this.state.description,
      users: [this.props.user._id]
    }
    request(payload, this.handleData)
  }

  render(){
    return(
      <div>
        { this.state.csa ? <Redirect to={`csa/${this.state.csa.id}`} /> : null }
        <div>Nome da CSA:</div>
        <input type='text' placehoder='Minha Csa' value={this.state.name} onChange={this.onChange('name')}/>
        <div>Descrição:</div>
        <input type='text' placehoder='Nossa CSA é...' value={this.state.local} onChange={this.onChange('description')}/>
        <div>Local de produção:</div>
        <input type='text' placehoder='Meu local' value={this.state.local} onChange={this.onChange('localPoint')}/>
        <Button onClick={this.createCSA}>Criar</Button>
      </div>
    )
  }
}

export default CSACreator
