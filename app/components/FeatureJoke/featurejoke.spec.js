import React from 'react';
import { mount, shallow } from 'enzyme';
import {assert, expect} from 'chai';
import sinon from 'sinon'

import FeatureJoke from './FeatureJoke';


describe('<FeatureJoke/>', () => {
  it.skip('should display a div with a featureJoke', () => {
    const wrapper = mount(<FeatureJoke/>);
    expect(wrapper.find('.FeatureJoke')).to.have.length(1);
  });
});
