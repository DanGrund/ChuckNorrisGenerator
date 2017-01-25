import React from 'react';
import Button from '../Button/Button';
import './header-style';

const logStuff = () => {
  console.log("settings!");
}

const Header = () => {
  return (
    <div className="Header">
      <button onClick={(e) => logStuff() }>Settings</button>
      <h1>
        CHUCK NORRIS JOKE MACHINE
      </h1>

    </div>
  );
}

export default Header;
