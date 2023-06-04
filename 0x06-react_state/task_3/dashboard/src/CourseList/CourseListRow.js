import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ textFirstCell, textSecondCell, isHeader }) => {
  const styles = StyleSheet.create({
    row: {
      backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
    },
    headerCell: {
      fontWeight: 'bold',
    },
  });

  return (
    <tr className={css(styles.row)}>
      {isHeader ? (
        <>
          <th className={css(styles.headerCell)} colSpan="2">{textFirstCell}</th>
        </>
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isHeader: PropTypes.bool,
};

CourseListRow.defaultProps = {
  textSecondCell: null,
  isHeader: false,
};

export default CourseListRow;
