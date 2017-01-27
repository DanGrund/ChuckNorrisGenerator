import React from 'react';
import Controls from '../Controls/Controls'
import SingleJoke from '../SingleJoke/SingleJoke'


const TheJokes = (props) => {
  let Jokes = props.jokes.map((joke, i) => <SingleJoke key={i} joke={joke.joke} favorite={joke.favorite} addToFavorites={props.addToFavorites}/>)

  return(
    <div>
      <Controls getJokes={props.pullDownLols} toggleFavorites={props.toggleFavorites} props={props} />
      {Jokes}
    </div>
  )

}

export default TheJokes
