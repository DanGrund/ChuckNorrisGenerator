import React from 'react';

const SingleJoke = (props) => {

  let doTheFavorites=(e)=>{
    props.addToFavorites(props.joke);
    e.target.classList.add('favorited');
  }
  return (
    <div className='single-joke'>
      {props.joke}
      <button className="favorites-button"
        onClick={(e)=>doTheFavorites(e)}
      >&#9733;</button>
    </div>
  )
}

export default SingleJoke;
