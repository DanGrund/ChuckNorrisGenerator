import React from 'react';
import { mount, shallow } from 'enzyme';
import {assert, expect} from 'chai';
import sinon from 'sinon'

import App from './App';
import Header from '../Header/Header';
import FeatureJoke from '../FeatureJoke/FeatureJoke';



describe('<App/>', () => {

  it.skip('should render a Header Component', ()=>{
    const wrapper = shallow(<App/>)
    expect(wrapper.contains(<Header/>)).to.equal(true);
  })

  it.skip('should keep track of jokes in state', function() {
    const wrapper = mount(<App />);
    wrapper.setState({jokes: ["ha","ha","ha"]
    });
    wrapper.update();
    expect(wrapper.state('jokes').length).to.equal(3);
  });
});
