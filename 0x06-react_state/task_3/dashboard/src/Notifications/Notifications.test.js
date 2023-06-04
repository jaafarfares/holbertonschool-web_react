import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  let wrapper;
  let markNotificationAsReadSpy;

  beforeEach(() => {
    markNotificationAsReadSpy = sinon.spy();
    wrapper = shallow(
      <Notifications
        displayDrawer={false}
        listNotifications={[
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' },
        ]}
        markNotificationAsRead={markNotificationAsReadSpy}
      />
    );
  });

  afterEach(() => {
    sinon.restore();
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it('renders the correct number of NotificationItem components', () => {
    expect(wrapper.find(NotificationItem)).to.have.lengthOf(2);
  });

  it('renders "No new notification for now" when listNotifications is empty', () => {
    wrapper.setProps({ listNotifications: [] });
    expect(wrapper.find('.Notifications').text()).to.equal('No new notification for now');
  });

  it('calls markNotificationAsRead with the correct id when markAsRead is called', () => {
    const instance = wrapper.instance();
    instance.markAsRead(1);
    expect(markNotificationAsReadSpy.calledOnceWith(1)).to.equal(true);
  });

  it('does not display the Notifications div when displayDrawer is false', () => {
    wrapper.setProps({ displayDrawer: false });
    expect(wrapper.find('.Notifications').exists()).to.equal(false);
  });

  it('displays the Notifications div when displayDrawer is true', () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find('.Notifications').exists()).to.equal(true);
  });
});
