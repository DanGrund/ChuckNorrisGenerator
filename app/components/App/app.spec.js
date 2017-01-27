import React from 'react';
import { render, mount, shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiJsx from 'chai-jsx';
import sinon from 'sinon';

import App from './App';
import Header from '../Header/Header';
import FeatureJoke from '../FeatureJoke/FeatureJoke';

chai.use(chaiEnzyme())
chai.use(chaiJsx)

describe('<App/>', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App children={<Header />} />
    )
  })

  it('should render a Header Component', ()=>{
    chai.expect(wrapper).to.have.descendants(Header);
  })

  it('should keep track of jokes in state', function() {
    wrapper.setState({jokes: ["ha","ha","ha"]
    });
    wrapper.update();
    chai.expect(wrapper.state('jokes').length).to.equal(3);
  });
});
