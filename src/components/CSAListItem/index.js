import React from 'react'
import { timeFormat } from '../../utils'
import style from './style'

const CSAListItem = ({csa, onClick}) => {

  var meetingPoints = csa.meetingpoints.sort( (first, second) => {
    var firstStartTime = new Date(first.startTime)
    var secondStartTime = new Date(second.startTime)
    return firstStartTime.getDay() < secondStartTime.getDay() })

  return(
    <div>
      <div className={"clickableText"} onClick={onClick}>{csa.name}</div>
      <div style={style.meetingPoints}>
      { meetingPoints.map( (item, index) => {
        return(
        <div key={index} style={style.meetingPoint}>
          <span>{item.location ? item.location : item.region}</span>

          <span>
            { timeFormat(item.startTime, item.endTime) }
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
