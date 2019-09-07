import React from 'react'
import { connect } from 'react-redux'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

class RegionFilterController extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
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

  static getDerivedStateFromProps(nextProps, prevState){
    return nextProps.regions && !prevState.regions ? {regions:nextProps.regions} : prevState
  }

  render(){
    var { regions } = this.state
    return (
      <div>
        <div className={"title"}>ONDE ACONTECE</div>
        <div>Região do Ponto de Convivência</div>

        <ExpansionPanel style={{boxShadow: "none"}}>
          <ExpansionPanelSummary>
            Selecione uma ou mais regiões
          </ExpansionPanelSummary>

          <ExpansionPanelDetails style={{display:"block"}}>
            {regions ? Object.keys(regions).map( item =>
              <FormControlLabel
                key={item}
                control={<Checkbox onChange={this.handleChange(item)}/>}
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
  var regions = !state.csas ? null :
                  state.csas.reduce( (prev, csa) => {
                    var a = csa.specific.meetingPoints.map( meetingPoint => meetingPoint.region )
                    var filtered = a.filter( element => prev.indexOf(element) < 0)
                    return [...prev, ...filtered]
                  }, [])
  var result = regions ? regions.reduce( (obj, item) => ({...obj, [item]: false}), {} ) : null
  return{
    regions: result
  }
}
export default connect(mapStateToProps)(RegionFilterController)

export const regionFilterFunction = (csas, data) => {
  if(data.type !== "REGION" || !Object.values(data.regions).reduce((prev, region) => region || prev, false))
    return csas
  else{
    return csas.filter( csa => csa.specific.meetingPoints
                          .reduce((prev, meetingPoint) =>{
                            console.log("meetingPoint.region:", meetingPoint.region)
                            console.log("data.regions[meetingPoint.region]:", data.regions[meetingPoint.region])
                            return data.regions[meetingPoint.region] || prev
                          }, false))
  }
}
