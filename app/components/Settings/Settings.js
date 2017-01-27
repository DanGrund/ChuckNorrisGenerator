import React from 'react';
import './settings-style';

export default class Settings extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name: ''
    }
  }

  render(){
    return(
      <div>
        <input
          value={this.state.name}
          onChange={(e)=>{this.setState({name: e.target.value})}}
        />
        <button onClick={()=>this.props.changeName(this.state.name)}>
          change name
        </button>
        <button onClick={()=>this.props.changeName('Chuck Norris')}>
          reset
        </button>
        <br/>
        parental controls
        <label className="switch">
          <input type="checkbox" checked={this.props.parentalControlsBool} onClick={()=>this.props.parentalControlToggle()}/>
          <div className="slider"></div>
        </label>
      </div>
    )
  }
}
