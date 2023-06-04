import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging HOC', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log mount and unmount messages for pure HTML element', () => {
    const WrappedComponent = WithLogging(() => <div>Hello</div>);
    const wrapper = shallow(<WrappedComponent />);
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted on componentDidMount()');

    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount on componentWillUnmount()');
  });

  it('should log mount and unmount messages with component name for Login component', () => {
    const Login = () => <div>Login Component</div>;
    const WrappedComponent = WithLogging(Login);
    const wrapper = shallow(<WrappedComponent />);
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted on componentDidMount()');

    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount on componentWillUnmount()');
  });
});
