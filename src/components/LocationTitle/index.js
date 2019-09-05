import React from 'react'

const styles = {
  background: "#F1F1F1",
  fontFamily: "Roboto",
  color: "#686868",
  padding: "40px 0px",
  paddingRight: "30%",
  paddingLeft: "16px"
}

const LocationTitle = ({title}) => {
  return(
    <div>
      <div style={styles}>{title}</div>
    </div>
  )
}

export default LocationTitle
