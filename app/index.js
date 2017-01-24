import React from 'react'
import { render } from 'react-dom'
import './styles';
import Header from './components/Header/Header'
import LastJoke from './components/LastJoke/LastJoke'
import ControlPanel from './components/ControlPanel/ControlPanel'
import TheJokes from './components/TheJokes/TheJokes'
import Settings from './components/Settings/Settings'


const App = () => {
  return (
    <div>
      <Header />
      <LastJoke />
      <ControlPanel />
      <TheJokes />
      <Settings />

    </div>
  );
}

render(<App />, document.getElementById('application'));
