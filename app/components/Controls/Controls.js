import React from 'react'
import './controls-style';

const Controls = (props) => {
  return (
    <div className="Controls">
      <form>
        <button onClick={()=>{this.props.pullDownLols(4)}}>new jokes</button>
        <input></input>
        <button>favorites</button>
      </form>
    </div>
  );
}

export default Controls
