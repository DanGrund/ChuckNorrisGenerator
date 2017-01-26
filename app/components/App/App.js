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
      parentalControls: false,
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

  render(){
    const Children = React.cloneElement(this.props.children, {
      pullDownLols: this.pullDownLols.bind(this),
      changeName: this.changeName.bind(this),
      parentalControls: this.parentalControls.bind(this),
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
