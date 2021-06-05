import React from 'react';
import Profile from './pages/profile';
import Home from './pages/home';
import GuestList from './pages/guest-list';
import parseRoute from './lib/parse-route';
import BudgetPage from './pages/budget-page';
// import { Doughnut } from 'react-chartjs-2';

// const state = {
//   labels: ['January', 'February', 'March',
//     'April', 'May'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       backgroundColor: [
//         '#B21F00',
//         '#C9DE00',
//         '#2FDE00',
//         '#00A6B4',
//         '#6800B4'
//       ],
//       hoverBackgroundColor: [
//         '#501800',
//         '#4B5000',
//         '#175000',
//         '#003350',
//         '#35014F'
//       ],
//       data: [65, 59, 80, 81, 56]
//     }
//   ]
// };

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
        {/* <Doughnut
          data={state}
          options={{
            title: {
              display: true,
              text: 'Average Rainfall per month',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        /> */}
      </>
    );
  }
}
