import React from 'react'
import { connect } from 'react-redux'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { weekDays } from '../../utils'
import { toggleDay } from '../../actions'

class WeekDayFilterController extends React.Component {
  constructor(props){
    super(props)
    this.state={
      weekDays: props.weekDays
    }
  }

  handleChange = (day) => (e) =>{
    this.props.dispatch(toggleDay(weekDays[day]))

    //TODO: SIMPLIFY THIS STUFF
    //SHOULD BE NO REASON TO USE STATE
    var week = this.state.weekDays
    week[weekDays[day]] = e.target.checked
    this.setState({weekDays: week})

    this.props.onFilterChanged({
      type: "WEEK_DAY",
      weekDays: this.state.weekDays
    })
  }

  render(){
    return(
      <div>
        <div className={"title-medium"}>QUANDO</div>
        <div>Dia do Ponto de Convivência</div>
        <div>
          { weekDays.map((item, index) =>
            <FormControlLabel
              key={index}
              label={item}
              control={
                <Checkbox checked={this.props.weekDays[item]} onChange={this.handleChange(index)}/>}
            />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    weekDays: state.visibilityFilter.weekDayFilter
  }
}
export default connect(mapStateToProps)(WeekDayFilterController)

export const weekDayFilterFunction = (csas, data) => {
  if(data.type !== "WEEK_DAY" || !Object.values(data.weekDays).reduce((prev, day) => prev || day, false))
    return csas
  else{
    return csas.filter( csa =>
                  csa.specific.meetingPoints.reduce(
                      (prev, meetingPoint) => {
                        var day = new Date(meetingPoint.startTime).getDay()
                        return data.weekDays[weekDays[day]] || prev
                      }, false))
  }
}
