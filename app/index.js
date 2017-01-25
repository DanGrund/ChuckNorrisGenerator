import React from 'react'
import { render } from 'react-dom'
import './styles';
import App from './components/App/App'
import TheJokes from './components/TheJokes/TheJokes'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/jokes' component={TheJokes}/>
    </Route>
  </Router>
)

render(router, document.getElementById('application'));
