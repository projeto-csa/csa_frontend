import React from 'react'
import TopicListItem from '../TopicListItem'
import requestTopics from './request.js'
//import requestTopic from './requestTopic.js'
//import Topic from '../Topic'
import { Link, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'

class TopicList extends React.Component {

  constructor(props){
    super(props)
    console.log(props.logged)
    console.log(props.topics)
    this.state = {
      selectedTopic: {},
      topics: props.topics,
      newTopic: false
    }
    if(!this.state.topics) requestTopics(this.handleData)
  }

  handleData = (data) => {
    this.setState({topics: data})
  }

  newTopic = (value) => () => this.setState({newTopic: value})

  render(){
    const { topics } = this.state
    return(
      <div>
        { topics ?
          this.state.topics.map((item, index) =>{
            return <Link to={{pathname: `/topico/${item._id}`, state: item}} key={index}>
                    <TopicListItem topic={item}/>
                   </Link>
        }
        ) : null}
        { this.props.logged ?
          <Button onClick={this.newTopic(true)}>Novo tópico</Button>
          : null
        }
        {this.state.newTopic ? <Redirect to='/topicCreation' /> : null }
      </div>
    )
  }
}
export default TopicList
