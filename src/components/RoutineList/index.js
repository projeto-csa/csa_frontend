import React from 'react'
import RoutineListItem from '../RoutineListItem'
import requestRoutines from './request.js'
//import requestTopic from './requestTopic.js'
//import Routine from '../Routine'
import { Link } from 'react-router-dom'

class RoutineList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selectedRoutine: {},
      routines: props.rotinas
    }
    console.log(this.state.routines)
    if(!this.state.routines) requestRoutines(this.handleData)
  }

  handleData = (data) => {
    this.setState({routines: data})
  }

  render(){
    const { routines } = this.state
    return(
      <div>
        { routines ?
          routines.map((item, index) =>
          <Link to={{pathname:`/rotina/${item._id}`, state:item}} key={index}>
            <RoutineListItem routine={item}/>
          </Link>
        ) : null}
      </div>
    )
  }
}
export default RoutineList
/*
<Route path={`${this.props.match.path}/:rotinaId`}
  render={(props) => {
    return(
      <Routine routine={this.state.routines.find((item)=>
          item._id === props.match.params.rotinaId )}
      />)
  }} />
*/
