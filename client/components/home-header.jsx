import React from 'react';
import SideNav from './side-nav';

class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      navOpen: false
    };
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
        <div className="home-header">
          <div className="logo">
            <button className="logo-header" onClick={this.handleClick}>
              Our Day
            </button>
          </div>
          <span className="couple-names">User &amp; Partner</span>
        </div>
        </>
      );
    } else {
      return (
        <div className="home-header">
          <div className="logo">
            <button className="logo-header" onClick={this.handleClick}>
              Our Day
            </button>
          </div>
          <span className="couple-names">User &amp; Partner</span>
        </div>
      );
    }
  }
}

export default HomeHeader;
