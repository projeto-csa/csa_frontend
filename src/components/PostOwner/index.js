import React from 'react'

const PostOwner = (props) => {
  var formatedDate = new Date(props.createdAt)
  if(props.user){
      return(
        <div>
          <img src={'http://i.pravatar.cc/24'} alt={props.user.username}/>
          <span>{props.user.username}</span>
          <span>{formatedDate.toLocaleString("pt-BR")}</span>
        </div>
      )
  }else{
      return <div></div>
  }
}
export default PostOwner
