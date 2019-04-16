import React from 'react'
import { Redirect } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import CSAListItem from '../CSAListItem'
import request from './request.js'

class Csas extends React.Component {

  constructor(){
    super()
    this.state = {
      csas: [],
      itemClicked: null
    }
  }

  handleData = (data) => {
    this.setState({csas: data})
  }

  componentDidMount(){
    request(this.handleData)
  }

  handleClick = (csa) => {
    return () => {
      this.setState({itemClicked: csa})
    }
  }

  render(){
    const { csas } = this.state
    return(
      <div>
        <div>Lista de CSAs</div>
        <List>
          {csas ? csas.map((item, index) =>
            <ListItem key={index} onClick={this.handleClick({pathname: `/csa/${item.id}`, state: item})}>
              <CSAListItem csa={item}/>
            </ListItem>)
          : <div>Carregando...</div>}
        </List>
        { this.state.itemClicked ? <Redirect to={this.state.itemClicked} /> : null }
      </div>
    )
  }
}

export default Csas
