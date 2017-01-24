import React from 'react';
import Button from '../Button/Button';
import './header-style';

const logStuff = () => {
  console.log("settings!");
}

const Header = () => {
  return (
    <div className="Header">
      <h1>
        CHUCK NORRIS JOKE MACHINE
        <button onClick={() => props.handleClick() }>Settings</button>
      </h1>

    </div>
  );
}

export default Header;
