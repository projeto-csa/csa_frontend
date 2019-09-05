import React from 'react'
import { Link } from 'react-router-dom'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

class NavDrawer extends React.Component {

  render(){
    const links = this.props.links
    const onLinkClick = this.props.onLinkClick
    return(
      <SwipeableDrawer
        open={this.props.open}
        onClose={onLinkClick}
        onOpen={onLinkClick}
      >
        <ul>
        {
          Object.keys(links).map( (item, index) =>
            <li key={index} onClick={onLinkClick}>
              <Link to={links[item].link}>
                { links[item].text }
              </Link>
            </li>
          )
        }
        </ul>
      </SwipeableDrawer>
    )
  }
}

export default NavDrawer
