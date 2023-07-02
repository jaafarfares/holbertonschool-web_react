import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';

describe('Testing the <Header /> Component', () => {
  let wrapper;

  before(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Header />);
  });

  after(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).to.be.true;
  });

  it('should render the correct title', () => {
    const title = wrapper.find('h1');
    expect(title.text()).to.equal('Dashboard');
  });
});
