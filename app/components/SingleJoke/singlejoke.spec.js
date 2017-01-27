import React from 'react';
import { mount, shallow } from 'enzyme';
import {assert, expect} from 'chai';
import sinon from 'sinon'

import SingleJoke from './SingleJoke';


describe('<SingleJoke/>', () => {
  it('should display a single-joke div', () => {
    const wrapper = mount(<SingleJoke/>);
    expect(wrapper.find('.single-joke')).to.have.length(1);
  });
});
