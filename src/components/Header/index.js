import React from 'react'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const styles = {
  desktop:{
    body: {
      textAlign: 'center',
      paddingTop:78,
      paddingBottom:78
    },
    title:{
      verticalAlign: 'middle',
      margin: 'auto',
      display: 'inline-block',
      padding: 2,
      margin: 2
    }
  },
  mobile:{
      background: "#F1F1F1",
      fontFamily: "Roboto",
      color: "#686868",
      padding: "40px 0px",
      paddingRight: "30%",
      paddingLeft: "16px"
  }
}
const Header = ({presentation, title, image, child}) => {
  styles.desktop.body = image ? { ...styles.desktop.body, backgroundImage: `url(${image})` } : styles.desktop.body

  return presentation === 'DESKTOP' ?
      <div style={styles.desktop.body}>
        <Paper style={styles.desktop.title}>
          {title}
        </Paper>
      </div>
    :
      <>
        <div style={styles.mobile}>{title}</div>
      </>
}

export default Header
