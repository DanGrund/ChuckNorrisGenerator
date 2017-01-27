import React from 'react';
import Controls from '../Controls/Controls'
import SingleJoke from '../SingleJoke/SingleJoke'


const TheFavorites = (props) => {

  let Favorites = props.favoriteJokes.map((joke, i) => <SingleJoke key={i} joke={joke}/>)

  return(
    <div>
      <Controls getJokes={props.pullDownLols} toggleFavorites={props.toggleFavorites} props={props} />
      {Favorites}
    </div>
  )

}

export default TheFavorites
