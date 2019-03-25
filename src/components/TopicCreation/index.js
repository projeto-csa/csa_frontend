import React from 'react'
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router-dom'
import request from './request.js'

class TopicCreation extends React.Component {
  constructor(){
    super()
    this.state = {
      title: '',
      description: '',
      topicId: undefined
    }
  }

  handleChange = (attribute) => {
    return (e) => {
      this.setState({[attribute]: e.target.value})
    }
  }

  handleData = (data) => {
    this.setState({topicId: data._id})
  }

  onClick = () => {
    let payload = {
      title: this.state.title,
      description: this.state.description,
      creator: localStorage.getItem('user')
    }
    request(payload, this.handleData)
  }

  render(){
    return(
      <div>
        <h1>Novo Tópico</h1>
        <label>Titulo</label><br/>
        <input type='text' placeholder='Titulo' onChange={this.handleChange('title')} /><br/>
        <textarea placeholder='Insira a descrição' onChange={this.handleChange('description')}/><br/>
        <Button onClick={this.onClick}>Criar</Button>
        <Button>Cancelar</Button>
        {this.state.topicId ? <Redirect to={`/topico/${this.state.topicId}`} /> : null}
      </div>
    )
  }
}

export default TopicCreation
