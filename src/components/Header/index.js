import React from 'react'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const styles = {
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
}
const Header = ({title, image, child}) => {
  styles.body = image ? { ...styles.body, backgroundImage: `url(${image})` } : styles.body
  return(
    <div style={styles.body}>
      <Paper style={styles.title}>
        {title}
      </Paper>
    </div>
  )
}

export default Header
