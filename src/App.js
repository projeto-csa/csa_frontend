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
import screenSizes from './screenSizes'
import request from './request.js'

const setUser = (userData) => {
  return {
    type: 'SET_USER',
    user: userData
  }
}

const setVersion = (version) => {
  version = version ? version
            : window.innerWidth <= screenSizes.mobileMaxWidth ? 'MOBILE' : 'DESKTOP'

  return {
    type: 'SCREEN_SIZE',
    screenSize: version
  }
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      user: null
    }
    props.dispatch(setVersion())
  }

  componentDidMount(){
    // auto login when user has already logged in from machine
    let userId = localStorage.getItem('user')
    if(userId){
      request(userId, this.setUserData)
    }
    window.addEventListener("resize", this.setWindowSize)
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.setWindowSize)
  }

  setUserData = (data) => {
    this.props.dispatch(setUser(data))
  }

  setWindowSize = () => {
    console.log(window.innerWidth)
    if(window.innerWidth > screenSizes.mobileMaxWidth &&
        this.props.screenSize === 'MOBILE')
      this.props.dispatch(setVersion('DESKTOP'))
    else if(window.innerWidth <= screenSizes.mobileMaxWidth &&
        this.props.screenSize === 'DESKTOP')
      this.props.dispatch(setVersion('MOBILE'))
  }

  render(){
    return(
      <Router>
        <div className="App">
          <Navbar onLogout={this.setUserData} />
          { this.props.screenSize === 'MOBILE' ?
            <LocationTitle title={"LUGAR NO SITE"} />
            : null
          }
          <StyleWrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/testPage" component={TestPage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" render={(props) => <Login {...props} onLogin={this.setUserData} />} />
            <Route exact path="/sobre" component={About} />
            <Route exact path="/comunidade-que-sustenta-a-agricultura" component={CSA} />

            <Route exact path="/topicos" component={Topics} />
            <Route path="/topico/:id" component={Topic} />

            <Route exact path="/rotinas" component={Routines} />
            <Route path="/rotina/:id" component={Routine} />

            <Route exact path="/csas" component={Csas} />
            <Route path="/csa/:id" component={CSAProfile} />

            <Route path="/semCSA" component={NoCSAYet} />
            <Route path="/csaCreator" component={CSACreator} />

            <PrivateRoute exact path="/topicCreation" component={TopicCreation} redirect="/"/>
            <PrivateRoute exact path="/routineCreation" component={RoutineCreation} redirect="/"/>

          </StyleWrapper>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    screenSize: state.screenSize,
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
