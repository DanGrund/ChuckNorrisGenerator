import React from 'react';
import './featureJoke-style';

export default class FeatureJoke extends React.Component {
  constructor(){
    super()
    this.state={
      featureJoke: '',
    }
  }

  componentDidMount() {
    fetch('http://api.icndb.com/jokes/random/1?escape=javascript').then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({ featureJoke: data.value[0].joke })
    })
  }

  render(){
    return (
      <div className="FeatureJoke">
        {this.state.featureJoke}
      </div>
    );
  }

}
