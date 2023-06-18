import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Testing the <Notifications /> Component', () => {
  let wrapper;
  let markAsReadSpy;

  beforeEach(() => {
    markAsReadSpy = sinon.spy();
    wrapper = shallow(
      <Notifications
        displayDrawer={false}
        listNotifications={[
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' },
          {
            id: 3,
            type: 'urgent',
            html: { __html: 'New notification html' },
          },
        ]}
        markAsRead={markAsReadSpy}
      />
    );
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should call markAsRead function and log to console when markAsRead is invoked', () => {
    const instance = wrapper.instance();
    const consoleLogSpy = sinon.spy(console, 'log');

    instance.markAsRead(1);

    expect(markAsReadSpy.calledOnceWith(1)).to.equal(true);
    expect(consoleLogSpy.calledOnceWith('Notification 1 has been marked as read')).to.equal(true);
  });

  it('should render the correct number of NotificationItem components', () => {
    expect(wrapper.find(NotificationItem)).to.have.lengthOf(3);
  });

  it('should not rerender when props are updated with the same list of notifications', () => {
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({
      displayDrawer: true,
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        {
          id: 3,
          type: 'urgent',
          html: { __html: 'New notification html' },
        },
      ],
      markAsRead: markAsReadSpy,
    });
    expect(shouldUpdate).to.equal(false);
  });

  it('should rerender when props are updated with a longer list of notifications', () => {
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({
      displayDrawer: true,
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        {
          id: 3,
          type: 'urgent',
          html: { __html: 'New notification html' },
        },
        { id: 4, type: 'default', value: 'New notification added' },
      ],
      markAsRead: markAsReadSpy,
    });
    expect(shouldUpdate).to.equal(true);
  });
});
