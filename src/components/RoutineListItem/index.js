import React from 'react'
import Paper from '@material-ui/core/Paper'

const RoutineListItem = ({routine, onClick}) => {

  return(
    <Paper onClick={onClick}>
      {routine.name}
    </Paper>
  )
}

export default RoutineListItem
