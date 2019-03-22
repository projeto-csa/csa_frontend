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
    this.state = {
      selectedTopic: {},
      topicos: props.topicos,
      newTopic: false
    }
    if(!this.state.topicos) requestTopics(this.handleData)
  }

  handleData = (data) => {
    this.setState({topicos: data})
  }

  newTopic = (value) => () => this.setState({newTopic: value})

  render(){
    const { topicos } = this.state
    return(
      <div>
        { topicos ?
          this.state.topicos.map((item, index) =>
          <Link to={{pathname: `/topico/${item._id}`, state: item}} key={index}>
            <TopicListItem topic={item}/>
          </Link>
        ) : null}
        <Button onClick={this.newTopic(true)}>Novo tópico</Button>
        {this.state.newTopic ? <Redirect to='/topicCreation' /> : null }
      </div>
    )
  }
}
export default TopicList
//${this.props.match.url}

//${this.props.match.path}
