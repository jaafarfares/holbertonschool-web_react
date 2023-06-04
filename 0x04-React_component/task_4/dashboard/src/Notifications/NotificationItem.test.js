import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('Testing the <NotificationItem /> Component', () => {
  let wrapper;
  let markAsReadSpy;

  beforeEach(() => {
    markAsReadSpy = sinon.spy();
    wrapper = shallow(
      <NotificationItem
        id={1}
        type="default"
        value="New course available"
        markAsRead={markAsReadSpy}
      />
    );
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should call markAsRead function with the correct id when clicked', () => {
    wrapper.simulate('click');
    expect(markAsReadSpy.calledOnceWith(1)).to.equal(true);
  });
});
