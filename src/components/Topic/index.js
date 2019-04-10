import React from 'react'
import { Link } from 'react-router-dom'
import Response from '../Response'
import ResponseForm from '../ResponseForm'
import PostOwner from '../PostOwner'
import RoutineList from '../RoutineList'
import answerRequest from './answerRequest'
import request from './request'

class Topic extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      topic: null
    }
  }

  componentDidMount(){
    request(this.props.match.params.id, this.handleData)
  }

  handleData = (data) => {
    this.setState({topic: data})
  }

  newAnswer = (answer) => {
    let temp = this.state.topic
    if(!temp.answers) temp.answers = []
    temp.answers = [...temp.answers, answer]
    this.setState({topic: temp})
  }

  render(){
    const { topic } = this.state
    console.log('topico: ', topic)
    return(
      <div className='Topic'>
        { topic ?
          <div>
            <span>Rotinas relacionadas</span>
            <div>{topic.routines.map((item, index) => <Link to={`/rotina/${item.id}`}>{item.name}</Link>)}</div>

            <h1>{topic.title}</h1>
            <PostOwner user={topic.creator} createdAt={topic.createdAt}/>

            <div>{topic.description}</div>
            <hr/>
            <div>
            { topic.answers.length > 0 ?
                topic.answers.map((item, index) =>
                  <Response response={item} key={index} />
                )
            : 'Nenhuma resposta!'
            }
            </div>
            { this.props.logged ?
              <ResponseForm onClick={answerRequest} topic={topic._id} newAnswer={this.newAnswer}/>
              : null
            }
          </div>
        : <div>Carregando...</div> }
      </div>
    )
  }
}

export default Topic
