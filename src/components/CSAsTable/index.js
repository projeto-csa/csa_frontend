import React from 'react'
import { timeFormat } from '../../utils'

const CSAsTable = props => {
  const styles = {
    table:{
      display: "grid",
      gridTemplateColumns: "33% 33% 33%"
    }
  }

  return(
    <div>
      <div style={styles.table}>
        <span>{props.text.CSAs}</span>
        <span>{props.text.WHERE}</span>
        <span>{props.text.WHEN}</span>
      </div>
      <div>
        { props.csas && props.csas.map((item, index) =>
          <div key={index}>
            { item.meetingpoints.map((meeting, i) =>
              <div style={styles.table} key={i}>
                <span className={"clickableText"}>{i === 0 ? item.name : ''}</span>
                <span>{meeting.location}</span>
                <span>{timeFormat(meeting.startTime, meeting.endTime)}</span>
              </div>
            )}
          <hr/>
          </div>
        )}
      </div>
    </div>
  )
}

export default CSAsTable
