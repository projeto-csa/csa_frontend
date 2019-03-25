import React from 'react'

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

  onClick = () => {
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
      <div className='ResponseForm'>
        <div>Sua resposta:</div>
        <input type='text' onChange={this.handleChange} value={this.state.message}/>
        <input type='submit' onClick={this.onClick} value='Enviar'/>
      </div>
    )
  }
}

export default ResponseForm
