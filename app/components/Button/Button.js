import React from 'react';

const Button = (props) => {
  return (
    <button onClick={() => props.handleClick() }></button>
  );
}

export default Button;
