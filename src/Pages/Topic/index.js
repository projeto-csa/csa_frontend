import React from 'react'
import { Link } from 'react-router-dom'

import Response from '../../components/Response'
import ResponseForm from '../../components/ResponseForm'
import PostOwner from '../../components/PostOwner'
import ToggleInterested from './ToggleInterested';

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
    const loggedUserId = localStorage.getItem('user')
    return(
      <div className='Topic'>
        { topic ?
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
            }} >
              <span>Rotinas relacionadas</span>
              <ToggleInterested userId={loggedUserId} topic={topic} afterFetch={this.handleData} />
            </div>
            {topic.routines.map((item, index) => <Link key={index} to={`/rotina/${item.id}`}>{item.name}</Link>)}

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
            { this.props.user ?
              <ResponseForm
                onClick={answerRequest}
                topic={topic._id}
                newAnswer={this.handleData}
                // newAnswer={this.newAnswer}
              />
              : null
            }
          </div>
        : <div>Carregando...</div> }
      </div>
    )
  }
}

export default Topic
