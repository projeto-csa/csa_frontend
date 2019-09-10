import React from 'react'
import { connect } from 'react-redux'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import { setRegions, toggleRegion } from '../../actions'

class RegionFilterController extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  handleChange = (region) => (e) => {

    this.props.dispatch(toggleRegion(region))

    var regionsBools = this.props.regions
    regionsBools[region] = e.target.checked


    this.setState({regions: regionsBools})
    this.props.onFilterChanged({
      type: "REGION",
      regions: this.props.regions
    })
  }

  render(){
    var { regions } = this.props
    return (
      <div>
        <div className={"title"}>ONDE ACONTECE</div>
        <div>Região do Ponto de Convivência</div>

        <ExpansionPanel style={{boxShadow: "none"}}>
          <ExpansionPanelSummary>
            Selecione uma ou mais regiões
          </ExpansionPanelSummary>

          <ExpansionPanelDetails style={{display:"block"}}>
            {regions ? Object.keys(regions).map( (item, index) =>
              <FormControlLabel
                key={index}
                control={<Checkbox checked={this.props.regionFilter[item]} onChange={this.handleChange(item)}/>}
                label={`${item}`}
              />
          ) : <div>Loading...</div>}
          </ExpansionPanelDetails>

        </ExpansionPanel>
      </div>
    )
  }
}
const mapStateToProps = state => {
  //TODO: CLEAN THIS MESS
  var regions = state.csas && state.csas.regions ? state.csas.regions.reduce( (obj, item) => ({...obj, [item]: false}), {} ) : null
  return{
    regions: regions,
    regionFilter: state.visibilityFilter.regionFilter
  }
}
export default connect(mapStateToProps)(RegionFilterController)

export const regionFilterFunction = (csas, data) => {
  if(data.type !== "REGION" || !Object.values(data.regions).reduce((prev, region) => region || prev, false))
    return csas
  else{
    return csas.filter( csa => csa.specific.meetingPoints
                          .reduce((prev, meetingPoint) =>{
                            return data.regions[meetingPoint.region] || prev
                          }, false))
  }
}
