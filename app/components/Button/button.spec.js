import React from 'react';
import { Link } from 'react-router'
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon'

import Button from './Button'

describe('<Button />', () => {

  it('renders as a <button>', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.type(), 'button');
  });

  it('should call a function on onClick', () => {
    const click = sinon.spy()
    const wrapper = mount(<Button  handleClick={click} />)
    expect(click.calledOnce).to.equal(false)
    wrapper.find('button').simulate('click')
    expect(click.calledOnce).to.equal(true)
  })

  it('should accept a text prop', () => {
    const wrapper = mount(<Button text='sheeeit' />)
    expect(wrapper.props().text).to.equal('sheeeit');
  })

  it('should accept an ID prop', () => {
    const wrapper = mount(<Button id='pizza' />)
    expect(wrapper.props().id).to.equal('pizza');
  })

  it('should accept a className prop', () => {
    const wrapper = mount(<Button className='rat' />)
    expect(wrapper.props().className).to.equal('rat');
  })

  it('should accept a disabled prop', () => {
    const wrapper = mount(<Button disabled={true}/>)
    expect(wrapper.props().disabled).to.equal(true);
  })

  it('should be disabled if disabled prop is true', ()=> {
    const click = sinon.spy()
    const wrapper = mount(<Button  disabled={true} handleClick={click} />)
    expect(click.calledOnce).to.equal(false)
    wrapper.find('button').simulate('click')
    expect(click.calledOnce).to.equal(false)
  })
  
})
