import React from 'react'
import { connect } from 'react-redux'

import CSAListItem from '../../components/CSAListItem'
import CSAsDisplayerDesktop from '../../components/CSAsDisplayer_Desktop'
import request from './request.js'

import text from './text'
import style from './style'

import { addCSAs, filterCSAs } from '../../actions'

class Csas extends React.Component {

  handleData = (data) => {
    this.props.dispatch(addCSAs(data))
    this.props.dispatch(filterCSAs(data))
  }

  componentDidMount(){
    request(this.handleData)
  }

  openFilters = () => {
    console.log("Abrir tela de filtros")
  }

  render(){
    const csas = this.props.filteredCSAs
    return(
      <div>
        {this.props.screenSize === 'MOBILE' ?
          <div>
            <div style={style.infoHeader}>
              <span className={"title"}>{text.WHERE_HEADER}</span>
              <span className={"title"}>{text.WHEN_HEADER}</span>
              <span
                className={"clickableText"}
                onClick={this.openFilters}>
                  {text.FILTERS}
              </span>
            </div>

            <hr/>

            {csas ? csas.map((item, index) =>
              <CSAListItem key={index} csa={item}/>)
            : <div>{text.LOADING}</div>}
          </div>
        :
        <CSAsDisplayerDesktop csas={csas} text={text}/>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    csas: state.csas,
    filteredCSAs: state.filteredCSAs,
    screenSize: state.screenSize
  }
}

export default connect(mapStateToProps)(Csas)
