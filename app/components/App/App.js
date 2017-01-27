import React from 'react';
import Header from '../Header/Header'
import FeatureJoke from '../FeatureJoke/FeatureJoke'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      jokes:[],
      favoriteJokes:[],
      firstName: 'Chuck',
      lastName: 'Norris',
      parentalControls: false,
    }
  }

  pullDownLols(numberOfLols) {
    let parentals = this.state.parentalControls ? '&limitTo=[explicit]' : '';
    fetch(`http://api.icndb.com/jokes/random/${numberOfLols}/?escape=javascript&firstName=${this.state.firstName}&lastName=${this.state.lastName}${parentals}`)
    .then((data) => {
      return data.json()
    }).then((data) => {
      let jokeArray = data.value.map(joke => Object.assign(joke, { favorite: false }))
      this.setState({jokes: jokeArray})
    })
  }

  changeName(name) {
    this.setState({ firstName: name.split(' ')[0], lastName: name.split(' ')[1] })
  }

  parentalControlToggle() {
    this.setState({ parentalControls: !this.state.parentalControls })
  }

  addToFavorites(joke) {
    let newArray = this.state.favoriteJokes;
    newArray.push(joke)
    this.setState({favoriteJokes: newArray})
  }

  render(){
    const Children = React.cloneElement(this.props.children, {
      pullDownLols: this.pullDownLols.bind(this),
      changeName: this.changeName.bind(this),
      parentalControlToggle: this.parentalControlToggle.bind(this),
      parentalControlsBool: this.state.parentalControls,
      jokes: this.state.jokes,
      favoriteJokes: this.state.favoriteJokes,
      addToFavorites: this.addToFavorites.bind(this),
    })

    return(
      <div>
        <Header/>
        <FeatureJoke/>
        {Children}
      </div>
    )
    }
}
