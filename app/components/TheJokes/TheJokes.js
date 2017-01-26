import React from 'react';
import Controls from '../Controls/Controls'
import SingleJoke from '../SingleJoke/SingleJoke'


const TheJokes = (props) => {

  let Jokes = props.jokes.map((joke, i) => <SingleJoke key={i} joke={joke} addToFavorites={props.addToFavorites}/>)

  let Favorites = props.favoriteJokes.map((joke, i) => <SingleJoke key={i} joke={joke}/>)

  let displayJokes = props.showFavorites ? Favorites : Jokes;
  return(
    <div>
      <Controls getJokes={props.pullDownLols} toggleFavorites={props.toggleFavorites} />
      {displayJokes}
    </div>
  )

}

export default TheJokes
