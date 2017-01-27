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
});
