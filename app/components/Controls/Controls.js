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
      <div className="get-new-jokes">
        <div className="controls">
          <Button className='new-jokes'
            disabled={!this.state.number}
            text='New Jokes'
            handleClick={()=>{this.props.getJokes(this.state.number); this.setState({number:''})}}
          />

          <input className='new-number'
            placeholder='#'
            type='number'
            value={this.state.number}
            onChange={(e)=>this.setState({number: e.target.value})}>
          </input>
        </div>

        <Link to={this.props.props.location.pathname==='/jokes' ? '/favorites' : '/jokes'}>
          <Button id='favorites'
            text={this.props.props.location.pathname==='/jokes'? 'Favorites':'All Jokes'}
            handleClick={()=>console.log('hacky way to get rid of no handleClick prop error in console')}
          />
        </Link>
      </div>
    );
  }

}

Controls.propTypes = {
  getJokes: React.PropTypes.func,
  props: React.PropTypes.object,
}
