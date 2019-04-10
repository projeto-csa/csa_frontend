import React from 'react'
import { Link } from 'react-router-dom'
import PostOwner from '../PostOwner'

const TopicListItem = ({topic}) => {

  return(
    <div>
      <Link to={{pathname: `/topico/${topic._id}`, state: topic}}>{topic.title}</Link>
      <PostOwner user={topic.creator} createdAt={topic.createdAt}/>
    </div>
  )
}

export default TopicListItem
