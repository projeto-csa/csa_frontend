import React from 'react'
import { connect } from 'react-redux'
import { setLocation } from '../../actions'

class Home extends React.Component {
  constructor(props){
    super(props)
    props.dispatch(setLocation('Home'))
  }
  
  render(){
    return(
      <div>
        <h1>Aqui é a Home!</h1>
      </div>
    )
  }
}

export default connect()(Home)
