import React from 'react'
import { Redirect } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import CSAListItem from '../../components/CSAListItem'
import request from './request.js'

import text from './text'
import style from './style'

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

  openFilters = () => {
    console.log("Abrir tela de filtros")
  }

  render(){
    const { csas } = this.state
    return(
      <div>
        <div style={style.infoHeader}>
          <span>{text.WHERE_HEADER}</span>
          <span>{text.WHEN_HEADER}</span>
          <span
            onClick={this.openFilters}
            style={style.clickableText}>
              {text.FILTERS}
          </span>
        </div>

        <hr/>

        {csas ? csas.map((item, index) =>
            <CSAListItem key={index} csa={item}
              onClick={this.handleClick({pathname: `/csa/${item.id}`, state: item})} />)
        : <div>{text.LOADING}</div>}

        { this.state.itemClicked ? <Redirect to={this.state.itemClicked} /> : null }
      </div>
    )
  }
}

export default Csas
