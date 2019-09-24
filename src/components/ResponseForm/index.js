import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

import PostOwner from '../PostOwner'

class ResponseForm extends React.Component {
  constructor(){
    super()
    this.state = {
      message: ''
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({message: e.target.value})
  }

  toggleReply = () => {
    this.setState({textField: !this.state.textField})
  }

  sendReply = () => {
      this.props.onClick(
        {
          user: localStorage.getItem('user'),
          topic: this.props.topic,
          message: this.state.message
        },
        this.props.newAnswer)
        this.setState({message: ''})
  }

  render(){
    return(
      <div>
        <div className={'title-small'}>Meu comentário</div>
        <PostOwner user={this.props.user} />
        <TextField fullWidth multiline/>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button onClick={this.props.onCancel}>CANCELAR</Button>
          <Paper className='buttonPrimary'>
            <Button onClick={this.sendReply}>ENVIAR</Button>
          </Paper>
        </div>
      </div>
    )
  }
}

export default ResponseForm
