import React from 'react';
import Controls from '../Controls/Controls'
import SingleJoke from '../SingleJoke/SingleJoke'
import './jokescreen-style'

const TheFavorites = (props) => {

  let Favorites = props.favoriteJokes.map((joke, i) => <SingleJoke key={i} joke={joke}/>)

  return(
    <div className='jokes-box'>
      <Controls getJokes={props.pullDownLols} toggleFavorites={props.toggleFavorites} props={props} />
      {Favorites}
    </div>
  )

}

TheFavorites.propTypes={
  favoriteJokes: React.PropTypes.array,
  pullDownLols: React.PropTypes.func,
  toggleFavorites: React.PropTypes.func,
}

export default TheFavorites
