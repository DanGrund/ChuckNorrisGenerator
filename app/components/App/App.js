import React from 'react';
import Header from '../Header/Header'
import FeatureJoke from '../FeatureJoke/FeatureJoke'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      jokes:[],
      firstName: 'Chuck',
      lastName: 'Norris',
    }
  }

  pullDownLols(numberOfLols) {
    fetch(`http://api.icndb.com/jokes/random/${numberOfLols}/?escape=javascript&firstName=${this.state.firstName}&lastName=${this.state.lastName}`)
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
    // console.log(name.split(' ')[0])
    this.setState({ firstName: name.split(' ')[0], lastName: name.split(' ')[1] })
  }

  render(){
    const Children = React.cloneElement(this.props.children, {
      pullDownLols: this.pullDownLols.bind(this),
      changeName: this.changeName.bind(this),
      jokes: this.state.jokes
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
