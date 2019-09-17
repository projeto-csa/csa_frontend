import React from 'react'
import { connect } from 'react-redux'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'

import CSAsFilters from '../CSAsFilters'
import CSAListItem from '../../components/CSAListItem'

import style from './style'

class CSAsDisplayerMobile extends React.Component{
  constructor(){
    super()
    this.state = {
      open: false
    }
  }

  openFilters = (open) => () => {
    this.setState({open: open})
  }

  render(){
    const { text } = this.props
    const { csas } = this.props
    return(
      <>
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
      <SwipeableDrawer
        open={this.state.open}
        onOpen={this.openFilters(true)}
        onClose={this.openFilters(false)}
        anchor='right'>
        <CSAsFilters csas={csas}/>
        <Button onClick={this.openFilters(false)}>Close</Button>
      </SwipeableDrawer>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    csas: state.csas ? state.csas.filtered : undefined,
  }
}

export default connect(mapStateToProps)(CSAsDisplayerMobile)
