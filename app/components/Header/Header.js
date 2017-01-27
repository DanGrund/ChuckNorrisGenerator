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

        <Link to={this.state.settings?'/jokes' : '/settings'}>
          <Button className='settings-button'
                  text={this.state.settings ? 'Jokes' : 'Settings'}
                  handleClick={() => this.setState({ settings: !this.state.settings })}
          />
        </Link>

        <h1>CHUCK NORRIS JOKE MACHINE</h1>

      </div>
    );
  }
}
