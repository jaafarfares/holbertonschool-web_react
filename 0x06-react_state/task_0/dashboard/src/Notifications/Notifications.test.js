import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('verifies that clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawerSpy = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={false}
        listNotifications={[]}
        handleDisplayDrawer={handleDisplayDrawerSpy}
        handleHideDrawer={() => {}}
      />
    );
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawerSpy).toHaveBeenCalled();
  });

  it('verifies that clicking on the button calls handleHideDrawer', () => {
    const handleHideDrawerSpy = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={[]}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={handleHideDrawerSpy}
      />
    );
    wrapper.find('.closeButton').simulate('click');
    expect(handleHideDrawerSpy).toHaveBeenCalled();
  });
});
