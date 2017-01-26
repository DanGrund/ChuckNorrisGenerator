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
      showFavorites: false,
    }
  }

  pullDownLols(numberOfLols) {
    let parentals = this.state.parentalControls ? '&exclude=[nerdy]' : '';

    fetch(`http://api.icndb.com/jokes/random/${numberOfLols}/?escape=javascript&firstName=${this.state.firstName}&lastName=${this.state.lastName}${parentals}`)
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      return data.value.map(value => value.joke)
    })
    .then(dataArray => {
      this.setState({ jokes: dataArray })
    })
  }

  changeName(name) {
    this.setState({ firstName: name.split(' ')[0], lastName: name.split(' ')[1] })
  }

  parentalControls() {
    this.setState({ parentalControls: !this.state.parentalControls })
  }

  toggleFavorites() {
    this.setState({showFavorites: !this.state.showFavorites })
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
      parentalControls: this.parentalControls.bind(this),
      jokes: this.state.jokes,
      favoriteJokes: this.state.favoriteJokes,
      addToFavorites: this.addToFavorites.bind(this),
      toggleFavorites: this.toggleFavorites.bind(this),
      showFavorites: this.state.showFavorites,
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
