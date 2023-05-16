import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';

const CourseList = ({ listCourses }) => {
  return (
    <table>
      <thead>
        <CourseListRow isHeader textFirstCell="Available courses" />
        <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
