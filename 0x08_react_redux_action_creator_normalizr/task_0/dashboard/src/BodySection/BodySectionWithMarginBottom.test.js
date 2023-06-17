import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom component', () => {
  it('renders the BodySection component with correct props', () => {
    const title = 'test title';
    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    // Check if the BodySection component is rendered
    expect(wrapper.find(BodySection)).toHaveLength(1);

    // Check if the props are passed correctly to the BodySection component
    expect(wrapper.find(BodySection).props().title).toEqual(title);
  });
});
