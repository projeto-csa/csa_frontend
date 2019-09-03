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

  handleChange = (attribute) => {
    return (e) => {
      this.setState({[attribute]: e.target.value})
    }
  }

  handleData = (data) => {
  }

  onClick = () => {
    console.log('state:', this.state)
    const payload = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
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
          <input type='text' placeholder='Nome' onChange={this.handleChange('firstname')}/><br/>
          <input type='text' placeholder='Sobrenome' onChange={this.handleChange('lastname')}/><br/>
          <input type='text' placeholder='Usuário' onChange={this.handleChange('user')}/><br/>
          <input type='email' placeholder='Email' onChange={this.handleChange('email')}/><br/>
          <input type='password' placeholder='Senha' onChange={this.handleChange('password')}/><br/>
          <input type='password' placeholder='Confirme a Senha' onChange={this.handleChange('confirmPassword')}/><br/>
          <input type='submit' onClick={this.onClick}/>
          {this.state.redirect ? <Redirect to='/login' /> : null }
      </div>
    )
  }
}
export default Register
