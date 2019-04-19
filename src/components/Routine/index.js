import React from 'react'
import Topics from '../Topics'
import request from './request.js'

class Routine extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      routine: null
    }
  }

  componentDidMount(){
    request(this.props.match.params.id, this.handleData)
  }

  handleData = (data) =>{
    this.setState({routine: data})
  }

  render(){
    const { routine } = this.state
    return(
      <div className='Routine'>
        {routine ?
          (<div>
            <h1>{routine.name}</h1>
            <h3>Descrição</h3>
            <p>{routine.description}</p>
            <h2>Topicos relacionados</h2>
            <Topics user={this.props.user} routine={{id: routine.id, name: routine.name}} topics={routine.topics}/>
          </div>) :
          <div>
            Making request.......
          </div>}
      </div>
    )}
}

export default Routine
