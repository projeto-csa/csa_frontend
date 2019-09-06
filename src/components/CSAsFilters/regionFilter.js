import React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

export const RegionFilterController = (props) => {
  return (
  <div>
    <div className={"title"}>ONDE ACONTECE</div>
    <div>Região do Ponto de Convivência</div>
    <ExpansionPanel style={{boxShadow: "none"}}>
      <ExpansionPanelSummary>
        Selecione uma ou mais regiões
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{display:"block"}}>
        {[...Array(10).keys()].map( item =>
          <FormControlLabel
            key={item}
            control={<Checkbox/>}
            label={`Região ${item}`}
            onClick={props.onFilterChanged} 
          />
        )}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
  )
}

export const regionFilterFunction = (csas) => {

  return csas
}
