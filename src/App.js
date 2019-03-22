import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CommentBox from './components/CommentBox'
import TestPage from './components/TestPage'
import TopicList from './components/TopicList'
import RoutineList from './components/RoutineList'
import Routine from './components/Routine'
import Topic from './components/Topic'
import TopicCreation from './components/TopicCreation'
import Register from './components/Register'
import Login from './components/Login'
import About from './components/About'
import CSA from './components/CSA'
import CSAProfile from './components/CSAProfile'
import StyleWrapper from './StyleWrapper'

class App extends React.Component{

  render(){
    return(
      <Router>
        <div className="App">
          <Navbar />
          <StyleWrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/comment" component={CommentBox} />
            <Route exact path="/testPage" component={TestPage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/sobre" component={About} />
            <Route exact path="/comunidade-que-sustenta-a-agricultura" component={CSA} />

            <Route exact path="/topicos" component={TopicList} />
            <Route exact path="/topicCreation" component={TopicCreation} />
            <Route exact path="/rotinas" component={RoutineList} />
            <Route exact path="/perfil-csa" component={CSAProfile} />
            <Route path="/rotina/:routineId" component={Routine}/>
            <Route path="/topico/:topicoId" component={Topic} />
          </StyleWrapper>
        </div>
      </Router>
    );
  }
}

export default App;
