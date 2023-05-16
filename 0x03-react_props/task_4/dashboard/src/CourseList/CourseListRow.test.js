import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <CourseListRow
            isHeader
            textFirstCell="Header"
          />
        </tbody>
      </table>
    );

    const thElement = getByText('Header');
    expect(thElement.getAttribute('colSpan')).toBe('2');
  });

  it('renders two cells when textSecondCell is present', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <CourseListRow
            isHeader
            textFirstCell="Header 1"
            textSecondCell="Header 2"
          />
        </tbody>
      </table>
    );

    const thElement1 = getByText('Header 1');
    const thElement2 = getByText('Header 2');
    expect(thElement1).toBeInTheDocument();
    expect(thElement2).toBeInTheDocument();
  });

  it('renders correctly two td elements within a tr element', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <CourseListRow
            textFirstCell="Cell 1"
            textSecondCell="Cell 2"
          />
        </tbody>
      </table>
    );

    const tdElement1 = getByText('Cell 1');
    const tdElement2 = getByText('Cell 2');
    expect(tdElement1).toBeInTheDocument();
    expect(tdElement2
