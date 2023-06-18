import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  item: {
    width: '100%',
    borderBottom: '1px solid black',
    padding: '10px 8px',
    fontSize: '20px',
  },
  urgent: {
    color: 'red',
  },
  default: {
    color: 'blue',
  },
});

const NotificationItem = ({ id, type, value, html, markAsRead }) => {
  const handleClick = () => {
    markAsRead(id);
  };

  const itemStyle = type === 'urgent' ? styles.urgent : styles.default;

  return (
    <li
      data-notification-type={type}
      onClick={handleClick}
      className={css(styles.item, itemStyle)}
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
