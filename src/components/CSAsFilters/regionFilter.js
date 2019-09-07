import React from 'react'
import { connect } from 'react-redux'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

class RegionFilterController extends React.Component {
  constructor(){
    super()
    this.state = {
      regions: Array(10).fill(false)
    }
  }

  handleChange = (region) => (e) => {
    var regionsBools = this.state.regions
    regionsBools[region] = e.target.checked
    this.setState({regions: regionsBools})
    this.props.onFilterChanged({
      type: "REGION",
      regions: this.state.regions
    })
  }

  render(){
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
                control={<Checkbox onChange={this.handleChange(item)}/>}
                label={`Região ${item}`}
              />
            )}
          </ExpansionPanelDetails>

        </ExpansionPanel>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return{
    csas: state.csas
  }
}
export default connect(mapStateToProps)(RegionFilterController)

export const regionFilterFunction = (csas, data) => {
  if(data.type !== "REGION" || !data.regions.reduce((prev, region) => region || prev, false))
    return csas
  else{
    return csas
  }
}
