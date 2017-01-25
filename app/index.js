import React from 'react'
import { render } from 'react-dom'
import './styles';
import App from './components/App/App'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';



render(
  <Router history={browserHistory}>
    <Route path='/' component={App}/>
  </Router>
  , document.getElementById('application'));
