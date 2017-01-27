import React from 'react';

const Button = (props) => {
  return (
    <button id={props.id}
      className={props.className}
      onClick={() => props.handleClick()}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}

export default Button;
