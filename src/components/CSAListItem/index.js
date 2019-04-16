import React from 'react'
import Paper from '@material-ui/core/Paper'


const CSAListItem = ({csa}) => {
  return(
    <Paper>
      <div>{csa.name}</div>
    </Paper>
  )
}

export default CSAListItem
