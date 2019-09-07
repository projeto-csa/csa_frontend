import React from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { weekDays } from '../../utils'

export class WeekDayFilterController extends React.Component {
  constructor(){
    super()
    this.state={
      weekDayChecked: Array(7).fill(false)
    }
  }

  handleChange = (day) => (e) =>{
      var weekDays = this.state.weekDayChecked
      weekDays[day] = e.target.checked
      this.setState({weekDayChecked:weekDays})
      this.props.onFilterChanged({
        type: "WEEK_DAY",
        weekDays: this.state.weekDayChecked
      })
  }

  render(){
    return(
      <div>
        <div className={"title"}>QUANDO</div>
        <div>Dia do Ponto de Convivência</div>
        <div>
          { weekDays.map((item, index) =>
            <FormControlLabel
              key={index}
              label={item}
              control={<Checkbox onChange={this.handleChange(index)}/>}/>
          )}
        </div>
      </div>
    )
  }
}

export const weekDayFilterFunction = (csas, data) => {
  if(data.type !== "WEEK_DAY" || !data.weekDays.reduce((prev, day) => prev || day, false))
    return csas
  else{
    return csas.filter( csa =>
                  csa.specific.meetingPoints.
                  reduce((prev, meetingPoint) => {
                    var day = new Date(meetingPoint.startTime).getDay()
                    return data.weekDays[day] || prev}, false))
  }
}
