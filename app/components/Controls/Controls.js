import React from 'react'
import Button from '../Button/Button';
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
        <Button className='new-jokes'
          disabled={!this.state.number}
          text='New Jokes'
          handleClick={()=>{this.props.getJokes(this.state.number); this.setState({number:''})}}
        />

        <input
          placeholder='#'
          type='number'
          value={this.state.number}
          onChange={(e)=>this.setState({number: e.target.value})}>
        </input>

        <Link to={this.props.props.location.pathname==='/jokes' ? '/favorites' : '/jokes'}>
          <Button className='favorites'
            text={this.props.props.location.pathname==='/jokes'? 'Favorites':'All Jokes'}
            handleClick={()=>console.log('hacky way to get rid of no handleClick prop error in console')}
          />
        </Link>
      </div>
    );
  }
  
}
