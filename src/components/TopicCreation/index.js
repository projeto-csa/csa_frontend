import React from 'react'
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router-dom'
import request from './request.js'

class TopicCreation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      routines: props.location.state ? [props.location.state] : null,
      title: '',
      description: '',
      topic: undefined
    }
  }

  handleChange = (attribute) => {
    return (e) => {
      this.setState({[attribute]: e.target.value})
    }
  }

  handleData = (data) => {
    console.log('topic data:', data)
    this.setState({topic: data})
  }

  onClick = () => {
    let payload = {
      title: this.state.title,
      description: this.state.description,
      creator: localStorage.getItem('user'),
      routines: this.state.routines.map( item => item.id)
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
        <div>Rotinas associadas:</div>
        {this.state.routines ?
          this.state.routines.map( (item, index) => <div key={index}>{item.name}</div>)
          : <div>Escolha ao menos uma rotina</div> }
        <Button onClick={this.onClick}>Criar</Button>
        <Button>Cancelar</Button>
        {this.state.topic ? <Redirect to={{pathname:`/topico/${this.state.topic._id}`, state: this.state.topic}} /> : null}
      </div>
    )
  }
}

export default TopicCreation
