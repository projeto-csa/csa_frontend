import React from 'react'
import { connect } from 'react-redux'
import requestTopics from './request.js'
import { Redirect } from 'react-router-dom'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import TopicListItem from '../../components/TopicListItem'

const styles = {
  button:{
    margin: 'auto',
    marginTop: 30,
    marginBottom: 30
  }
}
class Topics extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selectedTopic: {},
      topics: props.topics ? props.topics : null,
      newTopic: false,
      itemClicked: null
    }
  }

  componentDidMount(){
    if(!this.state.topics)
      requestTopics(this.handleData)
  }

  handleData = (data) => this.setState({topics: data})

  newTopic = () => this.setState({newTopic: true})

  handleClick = (link) => () =>{
    this.setState({itemClicked: link})
  }

  render(){
    const { topics } = this.state
    console.log('topics:', topics)
    return(
      <div>
          { topics ?
            this.state.topics.map((item, index) =>
              <TopicListItem topic={item} key={index}/>
          ) : null}
        { this.props.user ?
          <Paper className='buttonPrimary' style={styles.button}>
            <Button onClick={this.newTopic}>NOVA CONVERSA</Button>
          </Paper>
          : null
        }
        {this.state.newTopic ? <Redirect to={{pathname: '/topicCreation', state: this.props.routine}} /> : null }
        {this.state.itemClicked ? <Redirect to={this.state.itemClicked} /> : null }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Topics)
