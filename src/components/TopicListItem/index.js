import React from 'react'
import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem'
import PostOwner from '../PostOwner'

const styles = {
  container:{
    display: 'grid',
    gridTemplateColumns: '70% 30%',
    marginTop: 10
  },
  lastResponse:{
    textAlign: 'center',
    fontSize: 12
  }
}

const TopicListItem = ({topic}) => {
  var date = topic.answers && topic.answers.length > 0 ?
    new Date(Date.parse(topic.answers[topic.answers.length-1].createdAt))
  : new Date(Date.parse(topic.createdAt))
  console.log('date:', date)
  return(
    <div style={styles.container}>
      <Link to={{pathname: `/topico/${topic._id}`, state: topic }}>{topic.title}</Link>
      <div style={styles.lastResponse}>
        <div>{topic.answers ? topic.answers.length : 0}</div>
        <div>
          <div>último em</div>
          <div>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</div>
        </div>
      </div>
    </div>
  )
}
//<Link to={{pathname: `/topico/${topic._id}`, state: topic}}>{topic.title}</Link>

export default TopicListItem
