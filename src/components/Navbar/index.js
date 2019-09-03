import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import UserMenu from '../UserMenu'

const styles = {
  root: {
    flexGrow: 1,
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
          <Toolbar className={classes.root}>
            <IconButton onClick={this.openDrawer(true)} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              CSA Dev
            </Typography>
            <IconButton><SearchIcon /></IconButton>
            { this.props.user ?
              <Button onClick={this.userMenuToggle(true)}><img src={'http://i.pravatar.cc/24'} alt={'testImage'}/></Button>
              : <Button color="inherit"><Link to='/login'>Login</Link></Button>
            }
            { this.state.userMenu ?
              <UserMenu options={this.state.userMenuOptions}
                actions={this.state.userMenuActions} />
              : null
            }
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          open={this.state.drawer}
          onClose={this.openDrawer(false)}
          onOpen={this.openDrawer(true)}
        >
          <ul>
            <li key={0} onClick={this.openDrawer(false)}>
              <Link to='/'>Home</Link>
            </li>
            <li key={1} onClick={this.openDrawer(false)}>
              <Link to='/register'>Register</Link>
            </li>
            <li key={2} onClick={this.openDrawer(false)}>
              <Link to='/csas'>CSAs</Link></li>
            <li key={3} onClick={this.openDrawer(false)}>
              <Link to='/topicos'>Conversas</Link>
            </li>
            <li key={4} onClick={this.openDrawer(false)}>
              <Link to='/rotinas'>Rotinas</Link>
            </li>
            <li key={5} onClick={this.openDrawer(false)}>
              <Link to='/perfil-csa'>Perfil da CSA</Link>
            </li>
            <li key={6} onClick={this.openDrawer(false)}>
              <Link to='/sobre'>Sobre o site</Link></li>
            <li key={7} onClick={this.openDrawer(false)}>
              <Link to='/comunidade-que-sustenta-a-agricultura'>O que é CSA?</Link>
            </li>
          </ul>
        </SwipeableDrawer>
      </div>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(withRouter(withStyles(styles)(NavBar)))
