import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from './components/Navbar'
import LocationTitle from './components/LocationTitle'
import Home from './Pages/Home'
import TestPage from './Pages/TestPage'
import Topics from './Pages/Topics'
import Routines from './Pages/Routines'
import Routine from './Pages/Routine'
import RoutineCreation from './Pages/RoutineCreation'
import Topic from './Pages/Topic'
import TopicCreation from './Pages/TopicCreation'
import Register from './Pages/Register'
import Login from './Pages/Login'
import About from './Pages/About'
import CSA from './Pages/CSA'
import Csas from './Pages/CSAs'
import CSAProfile from './Pages/CSAProfile'
import NoCSAYet from './Pages/NoCSAYet'
import CSACreator from './Pages/CSACreator'
import PrivateRoute from './components/PrivateRoute'

import StyleWrapper from './StyleWrapper'
import request from './request.js'

const setUser = (userData) => {
  return {
    type: 'SET_USER',
    user: userData
  }
}

class App extends React.Component{
  constructor(){
    super()
    this.state={
      user: null
    }
  }

  componentDidMount(){
    // auto login when user has already logged in from machine
    let userId = localStorage.getItem('user')
    if(userId){
      request(userId, this.handleData)
    }
  }

  handleData = (data) => {
    this.props.dispatch(setUser(data))
    //this.setState({user: data})
  }

  Log = () => (user) => this.setState({user: user})

  render(){
    const { user } = this.state
    return(
      <Router>
        <div className="App">
          <Navbar user={this.state.user} onLogout={this.Log(false)}/>
          <div style={{height: '56px'}}></div>
          <LocationTitle title={"LUGAR NO SITE"} />
          <StyleWrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/testPage" component={TestPage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" render={(props) => <Login {...props} onLogin={this.Log(true)} />} />
            <Route exact path="/sobre" component={About} />
            <Route exact path="/comunidade-que-sustenta-a-agricultura" component={CSA} />

            <Route exact path="/topicos" render={ (props) => <Topics {...props} user={user} /> } />
            <Route path="/topico/:id" render={ (props) => <Topic {...props} user={user} /> } />

            <Route exact path="/rotinas" render={ (props) => <Routines {...props} user={user}/>} />
            <Route path="/rotina/:id" render={ (props) => <Routine {...props} user={user} />} />

            <Route exact path="/csas" component={Csas} />
            <Route path="/csa/:id" render={ (props) => <CSAProfile {...props} user={user} />} />

            <Route path="/semCSA" render={ (props) => <NoCSAYet {...props} user={user} />} />
            <Route path="/csaCreator" render={ (props) => <CSACreator {...props} user={user} />} />

            <PrivateRoute exact path="/topicCreation" component={TopicCreation} user={user} redirect="/"/>
            <PrivateRoute exact path="/routineCreation" component={RoutineCreation} user={user} redirect="/"/>

          </StyleWrapper>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
