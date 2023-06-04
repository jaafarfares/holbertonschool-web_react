import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('renders a header row correctly', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Header 1" textSecondCell="Header 2" isHeader />);
    const thElements = wrapper.find('th');

    expect(thElements).toHaveLength(1);
    expect(thElements.text()).toEqual('Header 1');
    expect(wrapper.contains(<th colSpan="2">Header 1</th>)).toEqual(true);
  });

  it('renders a regular row correctly', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Cell 1" textSecondCell="Cell 2" />);
    const tdElements = wrapper.find('td');

    expect(tdElements).toHaveLength(2);
    expect(tdElements.at(0).text()).toEqual('Cell 1');
    expect(tdElements.at(1).text()).toEqual('Cell 2');
  });

  it('applies header row style correctly', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Header 1" textSecondCell="Header 2" isHeader />);
    const trElement = wrapper.find('tr');

    expect(trElement.prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });

  it('applies regular row style correctly', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Cell 1" textSecondCell="Cell 2" />);
    const trElement = wrapper.find('tr');

    expect(trElement.prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
  });
});
