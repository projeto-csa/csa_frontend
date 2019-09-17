import React from 'react'
import { connect } from 'react-redux'

import CSAsDisplayerMobile from '../../components/CSAsDisplayer_Mobile'
import CSAsDisplayerDesktop from '../../components/CSAsDisplayer_Desktop'

import request from './request.js'
import { fetchCSAs } from '../../actions'

import text from './text'

class Csas extends React.Component {
  constructor(){
    super()
    request(this.handleData)
  }

  handleData = (data) => {
    this.props.dispatch(fetchCSAs(data))
  }

  render(){
    return(
      this.props.screenSize === 'MOBILE' ?
          <CSAsDisplayerMobile text={text}/>
        : <CSAsDisplayerDesktop text={text}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    screenSize: state.screenSize
  }
}

export default connect(mapStateToProps)(Csas)
