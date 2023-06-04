import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  menuItem: {
    fontStyle: 'italic',
  },
  display: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    right: '5px',
    top: '5px',
    border: '2px solid #e0354b',
    padding: '10px',
    backgroundColor: '#fff8f8',
    minWidth: '300px',
  },
  closeButton: {
    alignSelf: 'flex-end',
    ':hover': {
      cursor: 'pointer',
      color: '#e0354b',
    },
  },
});

export default class Notifications extends PureComponent {
  static propTypes = {
    displayDrawer: PropTypes.bool.isRequired,
    listNotifications: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        html: PropTypes.shape({ __html: PropTypes.string }),
      }),
    ).isRequired,
    handleDisplayDrawer: PropTypes.func.isRequired,
    handleHideDrawer: PropTypes.func.isRequired,
  };

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
  };

  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <div className={css(styles.menuItem)}>
        <div onClick={handleDisplayDrawer}>Your notifications</div>

        {displayDrawer && (
          <div className={css(styles.display)}>
            <button
              type="button"
              aria-label="Close"
              onClick={handleHideDrawer}
              className={css(styles.closeButton)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            {listNotifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {listNotifications.map((notification) => (
                    <li
                      key={notification.id}
                      dangerouslySetInnerHTML={notification.html ? notification.html : null}
                      onClick={() => this.markAsRead(notification.id)}
                    >
                      {notification.value}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}
