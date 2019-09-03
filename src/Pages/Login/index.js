import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import request from './request'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      identifier: '',
      password: '',
      redirect: false
    }
  }

  identifierChange = (e) => {
    this.setState({identifier: e.target.value})
  }

  passwordChange = (e) => {
    this.setState({password: e.target.value})
  }

  handleData = (data) => {
    localStorage.setItem('token', data.jwt)
    localStorage.setItem('user', data.user._id)
    this.props.onLogin(data.user)
    this.setState({redirect: true})
  }

  onClick = () => {
    let payload = {
      identifier: this.state.identifier,
      password: this.state.password
    }
    request(payload, this.handleData)
  }


  render(){
    return(
      <div>
        <h1>Login</h1>
        <input type='text' placeholder='Usuário' onChange={this.identifierChange}/><br/>
        <input type='password' placeholder='Senha' onChange={this.passwordChange}/><br/>
        <input type='submit' onClick={this.onClick}/>
        {this.state.redirect ? <Redirect to='/' /> : null}
      </div>
    )
  }
}



export default Login
