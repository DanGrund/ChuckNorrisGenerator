import React from 'react';
import { mount, shallow } from 'enzyme';
import {assert, expect} from 'chai';
import sinon from 'sinon'

import Controls from './Controls';


describe('<Controls/>', () => {
  it.skip('should display a controls div', () => {
    const wrapper = mount(<Controls/>);
    expect(wrapper.find('.get-new-jokes')).to.have.length(1);
  });

  it.skip('The div should contain a new Jokes Button', ()=> {

  })

  it.skip('the new jokes button should run the getJokes function', ()=> {

  })

  it.skip('should have a new number input', ()=> {

  })

  it.skip('new number input should update state', ()=> {

  })

  it.skip('should have a button favorites', ()=> {

  })

  it.skip('favorites button should link to the favorites path', ()=> {

  })

});
