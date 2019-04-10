import React from 'react'
import Response from '../Response'
import ResponseForm from '../ResponseForm'
import PostOwner from '../PostOwner'
import RoutineList from '../RoutineList'
import answerRequest from './answerRequest'
import request from './request'
class Topic extends React.Component {
  constructor(props){
    super(props)
    if(props.location)
      this.state = {
        topic: props.location.state
      }

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
    const { rotines } = this.state
    return(
      <div className='Topic'>
        <h4>Rotinas relacionadas</h4>
        { rotines ? <RoutineList rotinas={rotines} /> : null }
        { topic ?
          <div>
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
        : null }
      </div>
    )
  }
}

export default Topic
