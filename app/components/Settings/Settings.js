import React from 'react';

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
        <button
          onClick={()=>this.props.changeName(this.state.name)}
        >change name</button>
        <button
          onClick={()=>this.props.changeName('Chuck Norris')}
        >reset</button>
        <br/>
        parental controls
        <form>
          <button type='radio' value='off'>off</button>
          <button type='radio' value='on'>on</button>
        </form>
      </div>
    )
  }
}
