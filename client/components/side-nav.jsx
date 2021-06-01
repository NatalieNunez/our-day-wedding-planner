import React from 'react';
// import Header from './header';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: true
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(event) {
    const navOpen = this.state.navOpen;
    if (event.target.className !== 'nav-open') {
      return;
    }
    this.setState({
      navOpen: !navOpen
    });
  }

  render() {
    const navOpen = this.state.navOpen;
    return (
      // clicking <a> link logo inside nav should take them to home page
      // clicking other links should take them to their respective pages
      // clicking shade (nav-open) should close nav
      <div className={navOpen ? 'nav-open' : 'nav-close'} onClick={this.toggleNav}>
        <div className="nav-box">
          <div className="header">
            <div className="logo nav-logo">
              <a className="logo-text" href="#">Our Day</a>
            </div>
          </div>
          <a className="nav-links" href="#profile">Profile</a>
          <div className="divider profile"></div>
          <a className="nav-links" href="#guests">Guest List</a>
          <div className="divider profile"></div>
          <a className="nav-links" href="#budget">Budget</a>
          <div className="divider profile"></div>
        </div>
      </div>
    );
  }
}

export default SideNav;
