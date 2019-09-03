import React from 'react'
import { Redirect } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import CSAListItem from '../../components/CSAListItem'
import { requestCSAs, requestParticipation } from './request.js'

class NoCSAYet extends React.Component {
  constructor(props){
    super(props)
    this.state={
      step: [0],
      csas: [],
      csaSelected: null,
      createCSA: false
    }
    console.log('user id: ', props.user)
  }

  chooseCSA = (nextStep) => () => {
    requestCSAs(this.handleData('csas'))
    this.setState({step: [nextStep, ...this.state.step]})
  }

  handleData = (requestType) => (data) => {
    switch(requestType){
    case 'csas':
      this.setState({csas: data})
      break
    case 'participation':
      this.setState({csaSelected: data})
      break
    default:
      break
    }
  }

  createCSA = () => {
    this.setState({createCSA: true})
  }

  csaSelected = (nextStep, csa) => () => {
    console.log('choosen csa:', csa)
    console.log('user:', this.props.user)

    let payload = {
      id: csa.id,
      users: [...csa.users.map( u => u.id), this.props.user._id]
    }
    requestParticipation(payload, this.handleData('participation'))
    this.setState({csaSelected: csa, step: [nextStep, ...this.state.step]})
  }

  render(){
      return(
        <div>
        { this.state.createCSA ? <Redirect to='csaCreator' /> : null }
        { (() => {
          switch(this.state.step[0]){
            case 0:
              return(
                <div>
                  <div>Você ainda não pertence a uma CSA!</div>
                  <Button onClick={this.chooseCSA(1)}>Participar de uma CSA existente</Button>
                  <Button onClick={this.createCSA}>Criar minha CSA</Button>
                </div>
              )
            case 1:
              return(
                <div>
                  <div>Escolha uma CSA:</div>
                  <List>
                    {this.state.csas.map( (item, index) =>
                      <ListItem key={index} onClick={this.csaSelected(2, item)}>
                        <CSAListItem csa={item}/>
                      </ListItem>)}
                  </List>
                  <Button onClick={this.stepBack}>Cancelar</Button>
                </div>
              )
            case 2:
              return(
                <div>
                  <div>Seu pedido de participação foi enviado!</div>
                  <Button onClick={() => {this.setState({step:[3, ...this.state.step]})}}>Voltar a Home</Button>
                </div>
              )
            default:
              return <Redirect to='/' />
        }})()}
        </div>
      )
  }
}
export default NoCSAYet
