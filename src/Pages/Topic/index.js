import React from 'react'
import { connect } from 'react-redux'
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
    console.log('conversa:', topic)
    return(
      <div className='Topic'>
        { topic ?
          <div>
            <div>
              <div>
                <div className={'title-small'}>Práticas relacionadas</div>
                <div>
                  {topic.routines.map((item, index) =>
                    <Link key={index} to={`/rotina/${item.id}`}>{index > 0? ' | ' : ''}{item.name}</Link>
                  )}
                </div>
              </div>
              <ToggleInterested userId={loggedUserId} topic={topic} afterFetch={this.handleData} />
            </div>

            <div className={'title-big'}>{topic.title}</div>
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
                newAnswer={this.newAnswer}
              />
              : null
            }
          </div>
        : <div>Carregando...</div> }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Topic)
