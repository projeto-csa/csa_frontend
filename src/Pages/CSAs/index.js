import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import CSAListItem from '../../components/CSAListItem'
import CSAsDisplayer_Desktop from '../../components/CSAsDisplayer_Desktop'
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
        {this.props.screenSize === 'MOBILE' ?
          <div>
            <div style={style.infoHeader}>
              <span>{text.WHERE_HEADER}</span>
              <span>{text.WHEN_HEADER}</span>
              <span
                className={"clickableText"}
                onClick={this.openFilters}>
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
        :
        <CSAsDisplayer_Desktop csas={csas} text={text}/>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    screenSize: state.screenSize
  }
}

export default connect(mapStateToProps)(Csas)
