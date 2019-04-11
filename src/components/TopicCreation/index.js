import React from 'react'
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router-dom'
import request from './request.js'
import routinesRequest from './routinesRequest.js'
import RoutineListItem from '../RoutineListItem'

class TopicCreation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showRoutineList: false,
      relatedRoutines: props.location.state ? [props.location.state] : null,
      routines: null,
      title: '',
      description: '',
      topic: undefined
    }
  }

  componentDidMount(){
    routinesRequest(this.handleRoutinesData)
  }

  handleRoutinesData = (data) => {
    this.setState({routines: data})
  }

  handleChange = (attribute) => {
    return (e) => {
      this.setState({[attribute]: e.target.value})
    }
  }

  handleData = (data) => {
    this.setState({topic: data})
  }

  createTopic = () => {
    let payload = {
      title: this.state.title,
      description: this.state.description,
      creator: localStorage.getItem('user'),
      routines: this.state.relatedRoutines.map( item => item.id)
    }
    request(payload, this.handleData)
  }

  addRoutine = (routine) => () => {
    this.setState({relatedRoutines: [...this.state.relatedRoutines, routine]})
  }

  toggleRoutineList = () => {
    this.setState({showRoutineList: !this.state.showRoutineList})
  }

  render(){
    return(
      <div>
        <h1>Novo Tópico</h1>
        <label>Titulo</label><br/>
        <input type='text' placeholder='Titulo' onChange={this.handleChange('title')} /><br/>
        <textarea placeholder='Insira a descrição' onChange={this.handleChange('description')}/><br/>
        <div>Rotinas associadas:</div>
        <div>
        {this.state.relatedRoutines ?
          this.state.relatedRoutines.map( (item, index) => <span key={index}>{item.name}</span>)
          : <span>Nenhuma</span> }
        </div>
        { this.state.showRoutineList ?
            this.state.routines
              .filter( item => this.state.relatedRoutines.find( related => related.name === item.name) === undefined)
              .map( (item, index) =>
                <RoutineListItem routine={item} key={index} onClick={this.addRoutine(item)}/> )
            : null
        }
        <Button onClick={this.toggleRoutineList}>{!this.state.showRoutineList? 'Adicionar rotina' : 'Fechar'}</Button>
        <Button onClick={this.createTopic}>Criar</Button>
        <Button>Cancelar</Button>
        {this.state.topic ? <Redirect to={{pathname:`/topico/${this.state.topic._id}`, state: this.state.topic}} /> : null}
      </div>
    )
  }
}

export default TopicCreation
