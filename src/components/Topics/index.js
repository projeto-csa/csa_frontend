import React from 'react'
import requestTopics from './request.js'
import { Redirect } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import TopicListItem from '../TopicListItem'
import Button from '@material-ui/core/Button'

class Topics extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selectedTopic: {},
      topics: null,
      newTopic: false,
      itemClicked: null
    }
  }

  componentDidMount(){
    requestTopics(this.handleData)
  }

  handleData = (data) => this.setState({topics: data})

  newTopic = () => this.setState({newTopic: true})

  handleClick = (link) => () =>{
    this.setState({itemClicked: link})
  }

  render(){
    const { topics } = this.state
    return(
      <div>
        <List>
          { topics ?
            this.state.topics.map((item, index) =>
              <ListItem button key={index}
                onClick={this.handleClick({pathname: `/topico/${item._id}`, state: item })}>
                  <TopicListItem topic={item}/>
              </ListItem>
          ) : null}
        </List>
        { this.props.logged ?
          <Button onClick={this.newTopic}>Novo tópico</Button>
          : null
        }
        {this.state.newTopic ? <Redirect to={{pathname: '/topicCreation', state: this.props.routine}} /> : null }
        {this.state.itemClicked ? <Redirect to={this.state.itemClicked} /> : null }
      </div>
    )
  }
}

export default Topics
