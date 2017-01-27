import React from 'react';

const SingleJoke = (props) => {
  return (
    <div className='Single-Joke'>
      {props.joke}
      <button
        onClick={()=>props.addToFavorites(props.joke)}
      >⭐️</button>
    </div>
  )
}

export default SingleJoke;
