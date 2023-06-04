import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';

const styles = StyleSheet.create({
  notifications: {
    border: '2px dashed #f5f5f5ab',
    padding: '10px',
    marginBottom: '15px',
  },
});

export default class Notifications extends Component {
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
    markAsRead: PropTypes.func,
  };

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    markAsRead: () => {},
  };

  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
    this.previousLength = 0; 
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.previousLength;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    this.previousLength = listNotifications.length; 

    return (
      <div className={css(styles.notifications)}>
        <div className="NotificationsComponent">
          <div className="menuItem">
            <p>Your notifications</p>
          </div>
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
        </div>
      </div>
    );
  }
}
