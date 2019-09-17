import React from 'react'
import { connect } from 'react-redux'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

import { setRegions, toggleRegion } from '../../actions'

class RegionFilterController extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      regionFilter: {}
    }
  }

  static getDerivedStateFromProps(nextProps, previousState){
    if(nextProps.regionFilter !== previousState.regionFilter){
      return { regionFilter: nextProps.regionFilter }
    }else{
      return null
    }
  }

  handleChange = (region) => () => {
    this.props.dispatch(toggleRegion(region))

    var regionFilter = this.props.regionFilter
    regionFilter[region] = regionFilter[region] ? !regionFilter[region] : true

    this.props.onFilterChanged({
      type: "REGION",
      regions: regionFilter
    })
  }

  render(){
    var { regions } = this.props
    var { regionFilter } = this.state
    console.log('regionFilter in render:', regionFilter)
    return (
      <div>
        <div className={"title"}>ONDE ACONTECE</div>
        <div>Região do Ponto de Convivência</div>
        <div>
          { regionFilter && Object.keys(regionFilter).map((region, index) =>
            regionFilter[region] ?
            <div key={index}>
              <span>
                <Button onClick={this.handleChange(region)}><HighlightOffIcon /></Button>
              </span>
              <span>{region}</span>
            </div>
            : null
          )}
        </div>
        <ExpansionPanel style={{boxShadow: "none"}}>
          <ExpansionPanelSummary>
            Selecione uma ou mais regiões
          </ExpansionPanelSummary>

          <ExpansionPanelDetails style={{display:"block"}}>
            {regions ? Object.values(regions).map( (region, index) =>
              <FormControlLabel
                key={index}
                label={`${region}`}
                control={
                  <Checkbox checked={regionFilter[region] ? regionFilter[region] : false}
                            onChange={this.handleChange(region)}
                  />}
              />
          ) : <div>Loading...</div>}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return{
    regions: state.csas ? state.csas.regions : null,
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
