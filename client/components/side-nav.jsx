import React from 'react';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.isNavOpen();
  }

  render() {
    return (
      <div className="nav-open" onClick={this.handleClick}>
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
        </div>
      </div>
    );

  }

}

export default SideNav;
