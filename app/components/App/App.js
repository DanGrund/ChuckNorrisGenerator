import React from 'react';
import Header from '../Header/Header'
import FeatureJoke from '../FeatureJoke/FeatureJoke'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      jokes:[],
    }
  }

  pullDownLols(numberOfLols) {
    fetch(`http://api.icndb.com/jokes/random/${numberOfLols}?escape=javascript`).then((data) => {
      return data.json()
    }).then((data) => {
      return data.value.map(value => value.joke)
    }).then(dataArray => {
      this.setState({ jokes: dataArray })
    })
  }

  render(){
    const Children = React.cloneElement(this.props.children, {
      pullDownLols: this.pullDownLols.bind(this),
      jokes: this.state.jokes
    })

    return(
      <div>
        <Header/>
        <FeatureJoke/>
        {/* <button onClick={()=>this.fetchJokes(4)}></button> */}
        {Children}
      </div>
    )
    }
}
