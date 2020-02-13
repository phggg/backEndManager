import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import App from './App'
import Login from 'pages/login/index'
import Admin from './Admin'
import Page404 from 'pages/page404/index'

export default class IRouter extends Component {
  render () {
    return (
      <Router>
        <App>
          <Switch>
            <Route
              path='/login' component={Login}
            />
            <Route
              path='/admin'
              render={(props) => (
                <Admin {...props}>
                  <Route component={Page404} />
                </Admin>
              )}
            />
            <Redirect exact from='/' to='/admin' />
            <Route
              component={Page404}
            />
          </Switch>
        </App>
      </Router>
    )
  }
}
