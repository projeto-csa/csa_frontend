import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({component: Component, redirect, user, ...rest}) =>
  <Route {...rest}
    render={(props) => user === null ?
      <Redirect to={redirect}/>
    : <Component {...props} user />
    }
  />

export default PrivateRoute
