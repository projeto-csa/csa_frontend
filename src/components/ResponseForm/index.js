import React from 'react'

class ResponseForm extends React.Component {
  constructor(){
    super()
    this.state = {
      response: ''
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({response: e.target.value})
  }

  onClick = () => {
      this.props.onClick(
        {
          user: localStorage.getItem('user'),
          topico: this.props.topico,
          resposta: this.state.response
        },
        this.props.newAnswer)
        this.setState({response: ''})
  }

  render(){
    return(
      <div className='ResponseForm'>
        <div>Sua resposta:</div>
        <input type='text' onChange={this.handleChange} value={this.state.response}/>
        <input type='submit' onClick={this.onClick} value='Enviar'/>
      </div>
    )
  }
}

export default ResponseForm
