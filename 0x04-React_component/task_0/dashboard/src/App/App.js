export default class App extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
  };

  static defaultProps = {
    isLoggedIn: false,
  };

  render() {
    const { isLoggedIn } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];

    return (
      <Fragment>
        <div className="App">
          <div className="upperside">
            <Notifications listNotifications={listNotifications} />
            <Header />
          </div>

          {isLoggedIn === false && <Login />}
          {isLoggedIn === true && <CourseList listCourses={listCourses} />}

          <Footer />
        </div>
      </Fragment>
    );
  }
}
