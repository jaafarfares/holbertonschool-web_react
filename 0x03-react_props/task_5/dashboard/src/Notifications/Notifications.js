import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

const Notifications = ({ listNotifications }) => {
  return (
    <div className="Notifications">
      <div className="menuItem">Your notifications</div>
      {listNotifications.length === 0 ? (
        <NotificationItem value="No new notification for now" />
      ) : (
        listNotifications.map((notification) => (
          <NotificationItem key={notification.id} value={notification.value} />
        ))
      )}
    </div>
  );
};

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      html: PropTypes.shape({ __html: PropTypes.string.isRequired }),
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;
