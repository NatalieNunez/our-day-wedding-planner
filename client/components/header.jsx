import React from 'react';
import SideNav from './side-nav';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.state = {
      navOpen: false
    };
  }

  getTitle() {
    const location = window.location.hash;
    if (location === '#profile') {
      return 'Profile';
    }
    if (location === '#guests') {
      return 'Guest List';
    }
    if (location === '#budget') {
      return 'Budget';
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
            <span id="current-page">{this.getTitle()}</span>
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
          <span id="current-page">{this.getTitle()}</span>
        </div>
      );
    }
  }
}

export default Header;
