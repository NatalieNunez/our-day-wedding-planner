import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <a className="logo-text" href="#">
            Our Day
          </a>
        </div>
        <span id="current-page">Guest List</span>
      </div>
    );
  }
}

export default Header;
