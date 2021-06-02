import React from 'react';
import SideNav from './side-nav';
// import parseRoute from './lib/parse-route';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      navOpen: false,
      title: ''
    };
  }

  componentDidMount() {
    const location = window.location.hash;
    if (location === '#profile') {
      this.setState({
        title: 'Profile'
      });
    }
    if (location === '#guests') {
      this.setState({
        title: 'Guest List'
      });
    }
  }

  handleClick() {
    const navOpen = this.state.navOpen;
    this.setState({
      navOpen: !navOpen
    });
  }

  render() {
    const navOpen = this.state.navOpen;
    if (navOpen) {
      return (
        <>
        <SideNav isNavOpen={this.handleClick} />
        <div className="header">
          <div className="logo">
            <button className="logo-header" onClick={this.handleClick}>
              Our Day
            </button>
          </div>
          <span id="current-page">{this.state.title}</span>
        </div>
        </>
      );
    } else {
      return (
        <div className="header">
          <div className="logo">
            <button className="logo-header" onClick={this.handleClick}>
              Our Day
            </button>
          </div>
          <span id="current-page">{this.state.title}</span>
        </div>
      );
    }
  }
}

export default Header;
