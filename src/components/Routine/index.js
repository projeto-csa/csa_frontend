import React from 'react'
import TopicList from '../TopicList'
import request from './request'

class Routine extends React.Component {
  constructor(props){
    super(props)
    if(props.location)
      this.state = {
        routine: props.location.state
      }
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
            <TopicList topics={routine.topics}/>
          </div>) :
          <div>
            Making request.......
          </div>}
      </div>
    )}
}

export default Routine
