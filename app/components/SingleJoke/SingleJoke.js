import React from 'react';

const SingleJoke = (props) => {
  return (
    <div className='Single-Joke'>
      {props.joke}
      <button>⭐️</button>
    </div>
  )
}

export default SingleJoke;
