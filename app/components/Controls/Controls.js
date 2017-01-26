import React from 'react'
import './controls-style';
import { Link } from 'react-router';

export default class Controls extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      number:'',
    }
  }

  render(){
    return (
      <div className="Controls">
          <button disabled = {!this.state.number} onClick={()=>{this.props.getJokes(this.state.number); this.setState({number:''})}}>new jokes</button>
          <input
            value={this.state.number}
            onChange={(e)=>this.setState({number: e.target.value})}>
          </input>
          <Link to={this.props.props.location.pathname==='/jokes' ? '/favorites' : '/jokes'}>
            <button>favorites</button>
          </Link>

      </div>
    );
  }

}
