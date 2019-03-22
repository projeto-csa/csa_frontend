import React from 'react'
import { Redirect } from 'react-router-dom'
import request from './request'


class Register extends React.Component{
  constructor(){
    super()
    this.state = {
      user: '',
      email:'',
      password: '',
      confirmPassword: '',
      redirect: false
    }
  }
  userChange = (e) => {
    this.setState({user: e.target.value})
  }
  emailChange = (e) => {
    this.setState({email: e.target.value})
  }
  passwordChange = (e) => {
    this.setState({password: e.target.value})
  }
  confirmPasswordChange = (e) => {
    this.setState({confirmPassword: e.target.value})
  }

  handleData = (data) => {
  }

  onClick = () => {
    const payload = {
      username: this.state.user,
      email: this.state.email,
      password: this.state.password
    }
    request(payload, this.handleData)
    this.setState({redirect: true})
  }

  render(){
    return(
      <div>
        <div>Register</div>
          <input type='text' placeholder='Usuário' onChange={this.userChange}/><br/>
          <input type='email' placeholder='Email' onChange={this.emailChange}/><br/>
          <input type='password' placeholder='Senha' onChange={this.passwordChange}/><br/>
          <input type='password' placeholder='Confirme a Senha' onChange={this.confirmPasswordChange}/><br/>
          <input type='submit' onClick={this.onClick}/>
          {this.state.redirect ? <Redirect to='/login' /> : null }
      </div>
    )
  }
}
export default Register
