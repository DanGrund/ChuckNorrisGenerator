import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon'

import App from './App';
import Header from '../Header/Header';
import FeatureJoke from '../FeatureJoke/FeatureJoke';



describe('<App/>', () => {
  it.skip('should keep track of previous guesses in state', () => {
    const wrapper = mount(<Application />);
    wrapper.setState({guessArray: [1,2,3]
    });
    expect(wrapper.state('guessArray').length).to.equal(3);
  });
});
