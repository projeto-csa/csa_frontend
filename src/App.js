import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import TestPage from './components/TestPage'
import TopicList from './components/TopicList'
import RoutineList from './components/RoutineList'
import Routine from './components/Routine'
import RoutineCreation from './components/RoutineCreation'
import Topic from './components/Topic'
import TopicCreation from './components/TopicCreation'
import Register from './components/Register'
import Login from './components/Login'
import About from './components/About'
import CSA from './components/CSA'
import CSAProfile from './components/CSAProfile'
import StyleWrapper from './StyleWrapper'

class App extends React.Component{
  constructor(){
    super()
    let userId = localStorage.getItem('user')
    this.state={
      logged: (userId === '' ? false : true)
    }
  }

  Log = (log) =>
    () => this.setState({logged: log})

  render(){
    const { logged } = this.state
    return(
      <Router>
        <div className="App">
          <Navbar logged={this.state.logged} onLogout={this.Log(false)}/>
          <StyleWrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/testPage" component={TestPage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" render={(props) => <Login {...props} onLogin={this.Log(true)} />} />
            <Route exact path="/sobre" component={About} />
            <Route exact path="/comunidade-que-sustenta-a-agricultura" component={CSA} />

            <Route exact path="/topicos" render={ () => <TopicList logged={logged} /> } />
            <Route exact path="/topicCreation" component={TopicCreation} />
            <Route exact path="/rotinas" component={RoutineList} />
            <Route exact path="/routineCreation" component={RoutineCreation} />
            <Route exact path="/perfil-csa" component={CSAProfile} />
            <Route path="/rotina/:id" component={Routine} />
            <Route path="/topico/:id" render={ (props) => <Topic {...props} logged={logged} /> } />
          </StyleWrapper>
        </div>
      </Router>
    );
  }
}

export default App;
