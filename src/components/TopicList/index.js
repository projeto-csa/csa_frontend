import React from 'react'
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
    console.log('trying to pass: ', this.props.match)
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
          <Button onClick={this.newTopic}>Novo tópico</Button>
          : null
        }
        {this.state.newTopic ? <Redirect to={{pathname: '/topicCreation', state: this.props.routine}} /> : null }
        {this.state.itemClicked ? <Redirect to={this.state.itemClicked} /> : null }
      </div>
    )
  }
}

export default TopicList
