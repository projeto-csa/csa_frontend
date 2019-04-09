import React from 'react'
import { Redirect } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import StyleWrapper from './StyleWrapper.js'

const UserMenu = ({onClick, onLogout}) => {
  const options = ['Minhas informções', 'Minha CSA', 'Sair']
  let loggedOut = false;
  const Logout = () => {
    localStorage.setItem('user', '')
    localStorage.setItem('token', '')
    loggedOut = true
    onLogout()
  }
  return(
    <StyleWrapper>
      <Paper>
        <List>
          { options.map( (option, index) =>
            <ListItem onClick={onClick} key={index}>
              <Button onClick={Logout}>{option}</Button>
            </ListItem>
          )}
          {loggedOut ? <Redirect to={'/'} /> : null}
        </List>
      </Paper>
    </StyleWrapper>
  )
}

export default UserMenu
