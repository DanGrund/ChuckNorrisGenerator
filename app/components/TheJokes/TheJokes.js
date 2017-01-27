import React from 'react';
import Controls from '../Controls/Controls'
import SingleJoke from '../SingleJoke/SingleJoke'
import './jokescreen-style'

const TheJokes = (props) => {
  let Jokes = props.jokes.map((joke, i) => <SingleJoke key={i} joke={joke.joke} favorite={joke.favorite} addToFavorites={props.addToFavorites}/>)

  return(
    <div>
      <Controls getJokes={props.pullDownLols} toggleFavorites={props.toggleFavorites} props={props} />
      <div className='jokes-box'>
        {Jokes}
      </div>
    </div>
  )

}

TheJokes.propTypes={
  jokes: React.PropTypes.array,
  pullDownLols: React.PropTypes.func,
  toggleFavorites: React.PropTypes.func,
  addToFavorites: React.PropTypes.func,
}

export default TheJokes
