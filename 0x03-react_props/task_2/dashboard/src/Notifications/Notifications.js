import React from 'react';
import NotificationItem from './NotificationItem';

const Notifications = ({ notifications }) => {
  return (
    <ul>
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          type={notification.type}
          html={notification.html}
          value={notification.value}
        />
      ))}
    </ul>
  );
};

export default Notifications;
