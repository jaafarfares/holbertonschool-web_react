import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection component', () => {
  it('renders the title and children correctly', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Check if the h2 element contains the correct title
    expect(wrapper.find('h2').text()).toEqual('test title');

    // Check if the p element contains the correct children text
    expect(wrapper.find('p').text()).toEqual('test children node');
  });
});
