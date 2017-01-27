import React from 'react';
import { mount, shallow } from 'enzyme';
import {assert, expect} from 'chai';
import sinon from 'sinon'

import Settings from './Settings';


describe('<Settings/>', () => {
  it('should display a settings div', () => {
    const wrapper = shallow(<Settings/>);
    expect(wrapper.find('.settings')).to.have.length(1);
  });

  it('should render a name input', ()=> {
    const wrapper = shallow(<Settings/>);
    expect(wrapper.find('.name-state')).to.have.length(1)
  })

  it('input should update name state', () => {
    const wrapper = mount(<Settings />);
    const input = wrapper.find('.name-state');

    expect (wrapper.state('name')).to.equal('');
    input.simulate('change', {target: {value: 'Dan'} });
    expect (wrapper.state('name')).to.equal('Dan');
  })

  it.skip('should have a reset button', ()=> {

  })

  it.skip('reset button should set name state to Chuck Norris when clicked', ()=> {

  })

});
