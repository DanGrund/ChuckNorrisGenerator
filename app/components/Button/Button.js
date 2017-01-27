import React from 'react';
import './button-style';

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
Button.propTypes = {
  id: React.PropTypes.string,
  className: React.PropTypes.string,
  handleClick: React.PropTypes.func,
  disabled: React.PropTypes.bool,
}

export default Button;
