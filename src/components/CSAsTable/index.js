import React from 'react'
import { Link } from 'react-router-dom'

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
        <span className={"title-medium"}>{props.text.CSAs}</span>
        <span className={"title-medium"}>{props.text.WHERE_HEADER}</span>
        <span className={"title-medium"}>{props.text.WHEN_HEADER}</span>
      </div>
      <hr/>
      <div>
        { props.csas && props.csas.map((item, index) =>
          <div key={index}>
            { item.specific.meetingPoints && item.specific.meetingPoints.map((meeting, i) =>
              <div style={styles.table} key={i}>
                <span>
                  <Link to={{pathname: `/csa/${item.id}`, state: item}}>
                    {i === 0 ? item.name : ''}
                  </Link>
                </span>
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
