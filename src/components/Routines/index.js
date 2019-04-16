import React from 'react'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import RoutineListItem from '../RoutineListItem'
import requestRoutines from './request.js'

class Routines extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      hideCreate: props.hideCreate? true : false
    }
    requestRoutines(this.handleData)
  }

  handleData = (data) => {
    this.setState({routines: data})
  }

  newRoutine = (value) => () => this.setState({newRoutine: value})

  onClick = (redirectData) => () => {
    this.setState({redirect: true, redirectTo: redirectData})
  }
  render(){
    const { routines } = this.state
    return (
      <div>
        { routines ?
            routines.map((item, index) =>
              <RoutineListItem routine={item} key={index}
                onClick={this.onClick({pathname:`/rotina/${item._id}`, state:item})}/>)
            : null
        }
        {this.props.logged ? <Button onClick={this.newRoutine(true)}>Nova rotina</Button> : null}
        {this.state.newRoutine ? <Redirect to='/routineCreation' /> : null }
        {this.state.redirect ? <Redirect to={this.state.redirectTo} /> : null }
      </div>
    )
  }
}
export default Routines
