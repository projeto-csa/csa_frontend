import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  container:{
    display:'grid',
    gridTemplateColumns: 'fit-content(70px) auto',
    marginBottom: 10
  },
  avatar:{
    borderRadius: 17,
    marginTop: 6,
    marginRight: 6
  },
  userInfo:{
    fontSize: 12
  },
  createdAt:{
    color: '#979797',
    fontSize: 10
  }
}
const PostOwner = (props) => {
  var formatedDate = new Date(props.createdAt)
  console.log('user:', props.user)
  if(props.user){
      return(
        <div style={styles.container}>
          <img src={'http://i.pravatar.cc/35'}
            alt={props.user.username}
            style={styles.avatar}
            />
          <div style={styles.userInfo}>
            <div>{props.user.username}</div>
            <Link to={`/csa/${props.user.csa.id}`}>{props.user.csa.name}</Link>
            {props.createdAt &&
              <div style={styles.createdAt}>{formatedDate.toLocaleString("pt-BR")}</div>
            }
          </div>
        </div>
      )
  }else{
      return <div></div>
  }
}
export default PostOwner
