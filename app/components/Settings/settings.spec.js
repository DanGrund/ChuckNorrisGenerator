import React from 'react';
import { mount, shallow } from 'enzyme';
import {assert, expect} from 'chai';
import sinon from 'sinon'

import Settings from './Settings';


describe('<Settings/>', () => {
  it('should display a settings div', () => {
    const wrapper = mount(<Settings/>);
    expect(wrapper.find('.settings')).to.have.length(1);
  });
});
