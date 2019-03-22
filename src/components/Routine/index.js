import React from 'react'
import TopicList from '../TopicList'
import request from './request'

class Routine extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      routine: this.props.location.state
    }
    if(!this.state.routine){
      request(this.props.match.params.routineId , this.handleData)
    }
  }

  handleData = (data) =>{
    this.setState({routine: data})
  }

  render(){
    const { routine } = this.state
    console.log('routine: ', routine)
    return(
      <div className='Routine'>
        {routine ?
          (<div>
            <h1>{routine.nome}</h1>
            <h3>Descrição</h3>
            <p>{routine.descricao}</p>
            <h3>Metadados</h3>
            <span>Routine ID: </span><span>{routine._id}</span>
            <div>Routine creator</div>
            <h2>Topicos relacionados</h2>
            <TopicList topicos={routine.topicos}/>
          </div>) :
          <div>
            Making request.......
          </div>}
      </div>
    )}
}

export default Routine
//


//<ResponseList responses={props.routine.topicResponses} />
//<ResponseForm onClick={responseFormStub} />
