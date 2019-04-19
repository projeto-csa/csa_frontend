import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import StyleWrapper from './StyleWrapper.js'

const UserMenu = (props) => {
    return(
      <StyleWrapper>
        <Paper>
          <List>
            { props.options.map( (option, index) =>
              <ListItem key={index}>
                <Button onClick={props.actions[index]}>{option}</Button>
              </ListItem>
            )}
          </List>
        </Paper>
      </StyleWrapper>
    )
}

export default UserMenu
