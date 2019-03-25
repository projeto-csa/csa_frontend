import React from 'react'
import RoutineListItem from '../RoutineListItem'
import requestRoutines from './request.js'
import { Link, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'

class RoutineList extends React.Component {

  constructor(props){
    super(props)
    this.state = {}
    requestRoutines(this.handleData)
  }

  handleData = (data) => {
    this.setState({routines: data})
  }

  newRoutine = (value) => () => this.setState({newRoutine: value})

  render(){
    const { routines } = this.state
    console.log(routines)
    return(
      <div>
        { routines ?
          routines.map((item, index) =>{
          console.log(item)
          return(<Link to={{pathname:`/rotina/${item._id}`, state:item}} key={index}>
            <RoutineListItem routine={item}/>
          </Link>)
        }): null}
        <Button onClick={this.newRoutine(true)}>Nova rotina</Button>
        {this.state.newRoutine ? <Redirect to='/routineCreation' /> : null }
      </div>
    )
  }
}
export default RoutineList
