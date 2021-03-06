import React from 'react';
import Profile from './pages/profile';
import Home from './pages/home';
import GuestList from './pages/guest-list';
import parseRoute from './lib/parse-route';
import BudgetPage from './pages/budget-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const newRoute = parseRoute(window.location.hash);
      this.setState({
        route: newRoute
      });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'profile') {
      return <Profile />;
    }
    if (route.path === 'guests') {
      return <GuestList />;
    }
    if (route.path === 'budget') {
      return <BudgetPage />;
    }
  }

  render() {
    return (
      <>
        { this.renderPage() }
      </>
    );
  }
}
