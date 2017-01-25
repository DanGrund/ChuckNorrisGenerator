import React from 'react';
import Header from '../Header/Header'
import FeatureJoke from '../FeatureJoke/FeatureJoke'


class App extends React.Component {
  render(){
    return(
      <div>
        <Header/>
        <FeatureJoke/>
        {this.props.children}
      </div>
    )
    }
}

export default App;
