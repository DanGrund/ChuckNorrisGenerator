import React from 'react';
import Button from '../Button/Button';
import './header-style';
import { Link } from 'react-router';



export default class Header extends React.Component {

  constructor(){
    super()
    this.state={
      settings: false,
    }
  }

  render(){
    return (
      <div className="Header">

        <Link to={this.state.settings?'/settings' : '/jokes'}>
          <button
            className="settings-button"
            onClick={() => this.setState({ settings: !this.state.settings })}
          >
            Settings
          </button>
        </Link>

        <h1>CHUCK NORRIS JOKE MACHINE</h1>

      </div>
    );
  }
}
