import React from 'react';
import { mount, shallow } from 'enzyme';
import {assert, expect} from 'chai';
import sinon from 'sinon'

import TheFavorites from './TheFavorites';


describe('<TheFavorites/>', () => {
  it.skip('should display a jokes-box div', () => {
    const wrapper = mount(<TheFavorites/>);
    expect(wrapper.find('.jokes-box')).to.have.length(1);
  });
});
