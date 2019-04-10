import React from 'react'
import TopicList from '../TopicList'
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
            <TopicList logged={this.props.logged} routine={{id: routine.id, name: routine.name}} topics={routine.topics}/>
          </div>) :
          <div>
            Making request.......
          </div>}
      </div>
    )}
}

export default Routine
