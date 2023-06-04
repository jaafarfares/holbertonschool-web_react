import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css, keyframes } from 'aphrodite';
import NotificationItem from './NotificationItem';

const fadeIn = keyframes({
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
});

const bounce = keyframes({
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
});

const styles = StyleSheet.create({
  notifications: {
    border: '2px dashed #f5f5f5ab',
    padding: '10px',
    marginBottom: '15px',
  },
  menuItem: {
    float: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [fadeIn, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 3',
    },
  },
});

export default class Notifications extends PureComponent {
  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.string,
        html: PropTypes.shape({ __html: PropTypes.string }),
      })
    ),
    markNotificationAsRead: PropTypes.func.isRequired,
  };

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
  };

  markAsRead = (id) => {
    this.props.markNotificationAsRead(id);
  };

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div className={css(styles.notifications)}>
        <div className="NotificationsComponent">
          {displayDrawer && (
            <div className="Notifications">
              {listNotifications.length === 0 ? (
                <p>No new notification for now</p>
              ) : (
                <ul>
                  {listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      id={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              )}
            </div>
          )}
          <div className={css(styles.menuItem)}>
            <p>Your notifications</p>
          </div>
        </div>
      </div>
    );
  }
}
