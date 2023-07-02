import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Footer from './Footer';

describe('Testing the <Footer /> Component', () => {
  let wrapper;

  before(() => {
    wrapper = shallow(<Footer />);
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).to.be.true;
  });

  it('should display the correct year and footer copy', () => {
    const footerText = wrapper.find('p').text();
    expect(footerText).to.equal(`${getFullYear()} - ${getFooterCopy()}`);
  });
});
