import React from 'react'

import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'

const Variation = ({variation, selectable, selected, onClick}) => {
  return(
    <Paper  onClick={onClick}>
      <div>{variation.name}</div>
      {selectable ? <Checkbox checked={selected}/>: null}
      <p>{variation.description}</p>
    </Paper>
  )
}
export default Variation
