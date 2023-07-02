import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { fromJS } from 'immutable';

import App from './App';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing the <App /> Component', () => {
  let wrapper;
  let displayNotificationDrawerSpy;
  let hideNotificationDrawerSpy;

  beforeEach(() => {
    displayNotificationDrawerSpy = sinon.spy();
    hideNotificationDrawerSpy = sinon.spy();
    wrapper = shallow(
      <App
        displayNotificationDrawer={displayNotificationDrawerSpy}
        hideNotificationDrawer={hideNotificationDrawerSpy}
      />
    );
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should call displayNotificationDrawer when clicking on the menu item', () => {
    wrapper.find('Notifications').props().handleDisplayDrawer();
    expect(displayNotificationDrawerSpy.calledOnce).to.equal(true);
  });

  it('should call hideNotificationDrawer when clicking on the close button', () => {
    wrapper.find('Notifications').props().handleHideDrawer();
    expect(hideNotificationDrawerSpy.calledOnce).to.equal(true);
  });

  it('should return the right object when passing the state', () => {
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: false,
    });

    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: false,
    };

    const props = App.mapStateToProps(state);

    expect(props).to.deep.equal(expectedProps);
  });
});
