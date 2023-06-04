import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ id, type, value, html, markAsRead }) => {
  const handleClick = () => {
    markAsRead(id);
  };

  return (
    <li
      data-notification-type={type}
      onClick={handleClick}
      dangerouslySetInnerHTML={html ? html : undefined}
    >
      {value}
    </li>
  );
};

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  value: '',
  html: null,
  markAsRead: () => {},
};

export default React.memo(NotificationItem);
