import React from 'react';
import { mount, shallow } from 'enzyme';
import {assert, expect} from 'chai';
import sinon from 'sinon'
import 'isomorphic-fetch'

import FeatureJoke from './FeatureJoke';


describe('<FeatureJoke/>', () => {
  it('should display a div with a featureJoke', () => {
    const wrapper = mount(<FeatureJoke/>);
    expect(wrapper.find('.FeatureJoke')).to.have.length(1);
  });

  it('calls componentDidMount', () => {
    sinon.spy(FeatureJoke.prototype, 'componentDidMount');
      const wrapper = mount(<FeatureJoke />);
      expect(FeatureJoke.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it.skip('componentDidMount updates the state of featureJoke', ()=> {
    
  })

});
