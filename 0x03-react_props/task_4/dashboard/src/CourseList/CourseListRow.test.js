import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList', () => {
  it('renders the CourseList component without crashing', () => {
    render(<CourseList />);
  });

  it('renders the 5 different rows', () => {
    const { getByText } = render(<CourseList />);

    const availableCoursesHeader = getByText('Available courses');
    const courseNameHeader = getByText('Course name');
    const creditHeader = getByText('Credit');
    const es6Row = getByText('ES6');
    const webpackRow = getByText('Webpack');
    const reactRow = getByText('React');

    expect(availableCoursesHeader).toBeInTheDocument();
    expect(courseNameHeader).toBeInTheDocument();
    expect(creditHeader).toBeInTheDocument();
    expect(es6Row).toBeInTheDocument();
    expect(webpackRow).toBeInTheDocument();
    expect(reactRow).toBeInTheDocument();
  });
});
