import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

configure({ adapter: new Adapter() });

describe("Testing the <App /> Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("<App /> is rendered without crashing", () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it("<App /> contains the <Footer /> Component", () => {
    expect(wrapper.find(Footer)).to.have.lengthOf(1);
  });

  it("<App /> contains the <Header /> Component", () => {
    expect(wrapper.find(Header)).to.have.lengthOf(1);
  });

  it("<App /> contains <CourseList /> when isLoggedIn is true", () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find(CourseList)).to.have.lengthOf(1);
    expect(wrapper.find(Login)).to.have.lengthOf(0);
  });

  it("<App /> contains <Login /> when isLoggedIn is false", () => {
    wrapper.setProps({ isLoggedIn: false });
    expect(wrapper.find(Login)).to.have.lengthOf(1);
    expect(wrapper.find(CourseList)).to.have.lengthOf(0);
  });
});
