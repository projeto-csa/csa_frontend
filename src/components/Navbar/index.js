import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

import UserMenu from '../UserMenu'
import NavDrawer from '../NavDrawer'

import cssStyles from './styles.module.css'
import links from './links'

const styles = {
  root: {
    fontFamily: "Roboto",
    color: "#000000",
    background: "#E0E0E0"
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  userIcon:{
    borderRadius: 10
  },
  desktop:{
    fontSize: 12
  },
  desktopSeparator:{
    fontSize: 18
  }
};

class NavBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      drawer: false,
      userMenu: false,
      userMenuOptions: ['Minha CSA', 'Logout'],
      userMenuActions: [this.MyCsa, this.Logout]
    }
  }

  MyCsa = () => {
    this.setState({userMenu: false})
    let id = typeof this.props.user.csa === 'string' ? this.props.user.csa
            :typeof this.props.user.csa === 'object' ? this.props.user.csa._id
            : undefined
    id ? this.props.history.push({pathname: `/csa/${id}`})
    : this.props.history.push({pathname: `/semCSA`})
  }

  Logout = () => {
    localStorage.setItem('user', '')
    localStorage.setItem('token', '')
    this.props.onLogout(null)
    this.setState({userMenu: false})
  }

  openDrawer = (open) => {
    return () => {
      this.setState({drawer: open})
    }
  }

  userMenuToggle = (open) => {
    return () => this.setState({userMenu: open})
  }

  render(){
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar className={cssStyles.container}>
            { this.props.screenSize === 'MOBILE' ?
              <IconButton onClick={this.openDrawer(true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              : null
            }

              <Typography variant="h6" color="inherit" className={classes.grow}>
                <Link to='/'>
                  CSA Dev
                </Link>
              </Typography>


            <IconButton><SearchIcon /></IconButton>

            {/*Only shows on bigger screens*/}
            { this.props.screenSize === 'DESKTOP' ?
              Object.keys(links).map( (item, index) =>
                <span style={styles.desktop} key={index} onClick={this.openDrawer(false)}>
                  <Link to={links[item].link}>
                    { links[item].text }
                  </Link>
                  { index !== Object.keys(links).length -1 ?
                    <span style={styles.desktopSeparator}> | </span> : null
                  }
                </span>
              )
              : null
            }

            { this.props.user ?
              <Button
                onClick={this.userMenuToggle(true)}>
                <img style={styles.userIcon} src={'http://i.pravatar.cc/24'} alt={'testImage'}/>
              </Button>
              : <Button color="inherit"><Link to='/login'>Login</Link></Button>
            }

            { this.state.userMenu ?
              <UserMenu options={this.state.userMenuOptions}
                actions={this.state.userMenuActions} />
              : null
            }
          </Toolbar>
        </AppBar>
        <div></div>

        {/*Should only be used on small screen*/}
        { this.props.screenSize === 'MOBILE' ?
          <NavDrawer links={ links }
            open={this.state.drawer}
            onLinkClick={this.openDrawer(false)}
            match={this.props.match}
            location={this.props.location}/>
          : null
        }
      </div>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    user: state.user,
    screenSize: state.screenSize
  }
}

export default connect(mapStateToProps)(withRouter(withStyles(styles)(NavBar)))
