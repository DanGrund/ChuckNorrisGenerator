import React from 'react';
import Button from '../Button/Button'
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
      <div className='settings'>
        Set Name:
        <input
          value={this.state.name}
          onChange={(e)=>{this.setState({name: e.target.value})}}
        />

        <Button
          text="set"
          handleClick={()=>{this.props.changeName(this.state.name)}}/>

        <Button
          text="reset"
          handleClick={()=>this.props.changeName("Chuck Norris")}/>
          
        <div className='parentals'>
          parental controls
          <label className="switch">
            <input type="checkbox" checked={this.props.parentalControlsBool} onClick={()=>this.props.parentalControlToggle()}/>
            <div className="slider"></div>
          </label>
        </div>
      </div>
    )
  }
}
