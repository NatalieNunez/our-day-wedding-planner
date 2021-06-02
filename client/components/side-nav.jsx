import React from 'react';

function SideNav(props) {
  return (
    <div className={props.navOpen ? 'nav-open' : 'nav-close'} toggleNav={props.toggleNav}>
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

export default SideNav;
