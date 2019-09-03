import React from 'react'
import style from './style'

const CSAListItem = ({csa, onClick}) => {
  var weekDays = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]

  var meetingPoints = csa.meetingpoints.sort( (first, second) => {
    var firstStartTime = new Date(first.startTime)
    var secondStartTime = new Date(second.startTime)
    return firstStartTime.getDay() < secondStartTime.getDay() })

  return(
    <div>
      <div style={style.csaName} onClick={onClick}>{csa.name}</div>
      <div style={style.meetingPoints}>
      { meetingPoints.map( (item, index) => {
        let meetingPointStartTime = new Date(item.startTime)
        let meetingPointEndTime = new Date(item.endTime)
        return(
        <div key={index} style={style.meetingPoint}>
          <span>{item.location ? item.location : item.region}</span>

          <span>
            <span>{weekDays[meetingPointStartTime.getDay()-1]},</span>

            <span>{meetingPointStartTime.getHours()}h</span>
            {meetingPointStartTime.getMinutes() !== 0 ?
             <span>{meetingPointStartTime.getMinutes()}</span>:null}

            <span>-</span>

            <span>{meetingPointEndTime.getHours()}h</span>
            {meetingPointEndTime.getMinutes() !== 0 ?
             <span>{meetingPointEndTime.getMinutes()}</span>:null}
          </span>
        </div>
        )})
      }
      </div>
      <hr/>
    </div>
  )
}

export default CSAListItem
