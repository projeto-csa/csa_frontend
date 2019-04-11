import React from 'react'
import Paper from '@material-ui/core/Paper'
import PostOwner from '../PostOwner'

const TopicListItem = ({topic}) => {

  return(
    <Paper>
      <h4>{topic.title}</h4>
      <PostOwner user={topic.creator} createdAt={topic.createdAt}/>
    </Paper>
  )
}
//<Link to={{pathname: `/topico/${topic._id}`, state: topic}}>{topic.title}</Link>

export default TopicListItem
