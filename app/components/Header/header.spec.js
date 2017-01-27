import React from 'react';
import { Link } from 'react-router'
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon'

import Header from './Header';
import Button from '../Button/Button';

describe('<Header/>', () => {
  it('should display a single h1 tag', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should render a settings button', function() {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('.settings-button')).to.have.length(1)
  })

  it('settings button should be in a link', function() {
    const wrapper = shallow(<Header/>)
    expect(wrapper.find(Link)).to.have.length(1)
  })

  it.skip('settings button should change it\'s display text on click', function(){
    const wrapper = mount(<Header />)
    const button = wrapper.find('.settings-button');
    console.log(button.instance().value)
    // expect (button.innerHTML).to.equal('Settings')
  } )

});
