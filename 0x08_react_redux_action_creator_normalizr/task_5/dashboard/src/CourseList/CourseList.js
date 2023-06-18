import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

const styles = StyleSheet.create({
  courseList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  courseItem: {
    marginBottom: '10px',
  },
});

const CourseList = ({ listCourses }) => {
  return (
    <ul className={css(styles.courseList)}>
      {listCourses.map((course) => (
        <li key={course.id} className={css(styles.courseItem)}>
          <CourseShape course={course} />
        </li>
      ))}
    </ul>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(PropTypes.shape(CourseShape)).isRequired,
};

export default CourseList;
