import React from 'react'

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
        <span>Comunidade</span>
        <span>Onde Acontece</span>
        <span>Quando</span>
      </div>
      <div>
        { props.csas && props.csas.map((item, index) =>
          <div key={index}>
            { item.meetingpoints.map((meeting, i) =>
              <div style={styles.table}>
                <span>{i === 0 ? item.name : ''}</span>
                <span>{meeting.location}</span>
                <span>TIME</span>
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
