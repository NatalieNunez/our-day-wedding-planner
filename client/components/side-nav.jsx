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
            <div className="nav-logo">
              <a className="logo-text" href="#">Our Day</a>
            </div>
          </div>
          <a className="nav-links" href="#profile" id="profile-link">Profile</a>
          <div className="divider profile"></div>
          <a className="nav-links" href="#guests" id="guest-link">Guest List</a>
          <div className="divider profile"></div>
          <a className="nav-links" href="#budget" id="budget-link">Budget</a>
          <div className="divider profile"></div>
          <a className="nav-links" href="#" id="todo-link">I Do&apos;s</a>
          <div className="divider profile"></div>
        </div>
      </div>
    );

  }

}

export default SideNav;
