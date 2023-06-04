import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import App from './App';

configure({ adapter: new Adapter() });

describe('Testing the <App /> Component', () => {
  let wrapper;
  let logOutSpy;

  beforeEach(() => {
    logOutSpy = sinon.spy();
    wrapper = mount(<App logOut={logOutSpy} />);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should call logOut function and display alert when pressing Ctrl+H keys', () => {
    const event = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true,
    });

    Object.defineProperty(event, 'ctrlKey', { value: true });

    window.alert = sinon.spy();

    document.dispatchEvent(event);

    expect(logOutSpy.calledOnce).to.equal(true);
    expect(window.alert.calledOnce).to.equal(true);
    expect(window.alert.calledWith('Logging you out')).to.equal(true);
  });
});
