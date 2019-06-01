import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import TestPage from './components/TestPage'
import Topics from './components/Topics'
import Routines from './components/Routines'
import Routine from './components/Routine'
import RoutineCreation from './components/RoutineCreation'
import Topic from './components/Topic'
import TopicCreation from './components/TopicCreation'
import Register from './components/Register'
import Login from './components/Login'
import About from './components/About'
import CSA from './components/CSA'
import Csas from './components/CSAs'
import CSAProfile from './components/CSAProfile'
import NoCSAYet from './components/NoCSAYet'
import CSACreator from './components/CSACreator'
import PrivateRoute from './components/PrivateRoute'

import StyleWrapper from './StyleWrapper'
import request from './request.js'

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
    this.setState({user: data})
  }

  Log = () => (user) => this.setState({user: user})

  render(){
    const { user } = this.state
    return(
      <Router>
        <div className="App">
          <Navbar user={this.state.user} onLogout={this.Log(false)}/>
          <div style={{height: '20px'}}></div>
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

export default App;
