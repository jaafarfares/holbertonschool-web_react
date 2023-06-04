import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ textFirstCell, textSecondCell, isHeader }) => {
  const rowStyle = {
    backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
  };

  return (
    <tr style={rowStyle}>
      {isHeader ? (
        <>
          <th colSpan="2">{textFirstCell}</th>
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
