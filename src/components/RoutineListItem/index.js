import React from 'react'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'

const RoutineListItem = ({routine, onClick}) => {

  return(
    <Paper onClick={onClick}>
      {routine.name}
    </Paper>
  )
}

export default RoutineListItem
