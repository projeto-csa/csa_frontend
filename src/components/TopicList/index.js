import React from 'react'
import TopicListItem from '../TopicListItem'
import PostOwner from '../PostOwner'
import requestTopics from './request.js'
import { Redirect } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

class TopicList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selectedTopic: {},
      topics: props.topics,
      newTopic: false,
      itemClicked: null
    }
    if(!this.state.topics) requestTopics(this.handleData)
  }

  handleData = (data) => this.setState({topics: data})

  newTopic = (value) => () => this.setState({newTopic: value})

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
              <Paper key={index} >
                <ListItem button onClick={this.handleClick({pathname: `/topico/${item._id}`, state: item })}>
                  <ListItemText primary={item.title} />
                  <PostOwner user={item.creator} createdAt={item.createdAt}/>
                </ListItem>
              </Paper>
          ) : null}

        </List>
        { this.props.logged ?
          <Button onClick={this.newTopic(true)}>Novo tópico</Button>
          : null
        }
        {this.state.newTopic ? <Redirect to='/topicCreation' /> : null }
        {this.state.itemClicked ? <Redirect to={this.state.itemClicked} /> : null }
      </div>
    )
  }
}

export default TopicList
