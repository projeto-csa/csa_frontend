import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import StyleWrapper from './StyleWrapper.js'

const UserMenu = ({onClick}) => {
  const options = ['Minhas informções', 'Minha CSA', 'Sair']
  return(
    <StyleWrapper>
      <Paper>
        <List>
          { options.map( (option, index) =>
            <ListItem onClick={onClick} key={index}>
              <Button>{option}</Button>
            </ListItem>
          )}
        </List>
      </Paper>
    </StyleWrapper>
  )
}

export default UserMenu
