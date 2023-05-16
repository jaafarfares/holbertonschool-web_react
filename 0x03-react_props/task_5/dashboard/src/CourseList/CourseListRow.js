import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const CellComponent = isHeader ? 'th' : 'td';

  if (isHeader) {
    return (
      <tr>
        {textSecondCell ? (
          <>
            <CellComponent>{textFirstCell}</CellComponent>
            <CellComponent>{textSecondCell}</CellComponent>
          </>
        ) : (
          <CellComponent colSpan={2}>{textFirstCell}</CellComponent>
        )}
      </tr>
    );
  }

  return (
    <tr>
      <CellComponent>{textFirstCell}</CellComponent>
      <CellComponent>{textSecondCell}</CellComponent>
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
