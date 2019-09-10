import React from 'react'
import { connect } from 'react-redux'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'

import CSAListItem from '../../components/CSAListItem'
import CSAsDisplayerDesktop from '../../components/CSAsDisplayer_Desktop'
import CSAsFilters from '../../components/CSAsFilters'
import request from './request.js'

import text from './text'
import style from './style'

import { fetchCSAs, filterCSAs } from '../../actions'

class Csas extends React.Component {
  constructor(){
    super()
    this.state = {
      open: false
    }
  }

  handleData = (data) => {
    this.props.dispatch(fetchCSAs(data))
  }

  componentDidMount(){
    request(this.handleData)
  }

  openFilters = (open) => () => {
    this.setState({open: open})
  }

  render(){
    const csas = this.props.filteredCSAs
    console.log('csas:', csas)
    return(
      <div>
        {this.props.screenSize === 'MOBILE' ?
          <div>
            <div style={style.infoHeader}>
              <span className={"title"}>{text.WHERE_HEADER}</span>
              <span className={"title"}>{text.WHEN_HEADER}</span>
              <span
                className={"clickableText"}
                onClick={this.openFilters(true)}>
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
        <SwipeableDrawer
          open={this.state.open}
          onOpen={this.openFilters(true)}
          onClose={this.openFilters(false)}
          anchor='right'>
          <CSAsFilters csas={csas}/>
          <Button onClick={this.openFilters(false)}>Close</Button>
        </SwipeableDrawer>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    csas: state.csas ? state.csas.csas : undefined,
    filteredCSAs: state.csas ? state.csas.filtered : undefined,
    screenSize: state.screenSize
  }
}

export default connect(mapStateToProps)(Csas)
