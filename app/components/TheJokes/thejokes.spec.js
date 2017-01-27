import React from 'react';
import { mount, shallow } from 'enzyme';
import {assert, expect} from 'chai';
import sinon from 'sinon'

import TheJokes from './TheJokes';


describe('<TheJokes/>', () => {
  it.skip('should display a jokes-box div', () => {
    const wrapper = mount(<TheJokes/>);
    expect(wrapper.find('.jokes-box')).to.have.length(1);
  });
});
