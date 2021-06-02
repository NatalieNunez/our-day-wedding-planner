import React from 'react';

function Header(props) {
  // constructor(props) {
  //   super(props);
  //   this.toggleNav = this.toggleNav.bind(this);
  //   // this.state = {
  //   //   navOpen: false
  //   // };
  // }

  // toggleNav(event) {
  //   const navOpen = this.state.navOpen;
  //   if (event.target.className === 'nav-open' || event.target.className === 'logo-header') {
  //     this.setState({
  //       navOpen: !navOpen
  //     });
  //   }
  // }

  // render() {
  // const navOpen = this.state.navOpen;
  return (
      <>
      {/* <div className={navOpen ? 'nav-open' : 'nav-close'} onClick={this.toggleNav}>
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
          <a className="nav-links" href="#">Budget</a>
          <div className="divider profile"></div>
        </div>
      </div> */}

      <div className="header">
        <div className="logo">
          <a className="logo-header" href="#profile" openNav={props.toggleNav}>
            Our Day
          </a>
        </div>
        <span id="current-page">Profile</span>
      </div>
      </>
  );
  // }
}

export default Header;
