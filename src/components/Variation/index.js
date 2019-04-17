import React from 'react'

import Paper from '@material-ui/core/Paper'

const Variation = ({variation}) => {
  return(
    <Paper>
      <div>{variation.name}</div>
      <p>{variation.description}</p>
    </Paper>
  )
}
export default Variation
