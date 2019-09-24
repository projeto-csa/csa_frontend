import React from 'react'
import { connect } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

import PostOwner from '../PostOwner'
import ResponseForm from '../ResponseForm'


const styles = {
  reply:{
    display: 'block',
    fontSize: 14,
    marginLeft: 'auto',
    marginRight: 0
  }
}

class Response extends React.Component {
  constructor(){
    super()
    this.state = {
      directReply: false
    }
  }

  toggleReply = () => {
    this.setState({directReply: !this.state.directReply})
  }

  render(){
    var { directReply } = this.state
    return(
      <div className='Response'>
        <PostOwner user={this.props.response.user} createdAt={this.props.response.createdAt}/>
        <p>{this.props.response.message}</p>
        {directReply ?
          <ResponseForm onCancel={this.toggleReply}/>
          : <Button style={styles.reply} onClick={this.toggleReply}>RESPONDER</Button>
        }
        {/*}{ props.response.user._id === localStorage.getItem('user') ?
          <Button><DeleteIcon /></Button>
          : null
        }*/}
        <hr/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    user: state.user
  }
}

export default connect(mapStateToProps)(Response)
