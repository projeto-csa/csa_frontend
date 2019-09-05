import React from 'react'
import CSAsTable from '../CSAsTable'
const CSAsDisplayer_Desktop = props => {
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "20% 80%",
      gridGap: 30
    }
  }
  return(
    <div style={styles.container}>
      <div style={{height: 500, background: '#E1E1E1'}}>
        {props.text.FILTERS}
        <hr/>
      </div>
      <div>
        <div>Lista de CSAs</div>
        <hr/>
        <CSAsTable csas={props.csas} text={props.text}/>
      </div>
    </div>
  )
}

export default CSAsDisplayer_Desktop
