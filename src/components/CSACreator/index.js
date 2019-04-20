import React from 'react'

class CSACreator extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  handleData = (data) => {
    this.setState({csas: data})
  }

  stepBack = () => {
    //return list with first element removed
    this.setState({step: this.state.step.filter((item, index) => index !== 0 ? true : false )})
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}

export default CSACreator
