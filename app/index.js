import React from 'react'
import { render } from 'react-dom'
import './styles';
import App from './components/App/App'
import TheJokes from './components/TheJokes/TheJokes'
import Settings from './components/Settings/Settings'
import { Router, browserHistory, Route, IndexRoute, IndexRedirect } from 'react-router';


const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      {/* holy shit thanks Limbo for saving me hours of frustration */}
      <IndexRedirect to='/jokes' />
      <Route path='/jokes' component={TheJokes}/>
      <Route path='/settings' component={Settings}/>
    </Route>
  </Router>
)

render(router, document.getElementById('application'));
