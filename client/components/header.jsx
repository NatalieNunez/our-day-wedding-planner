import React from 'react';
import SideNav from './side-nav';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      navOpen: false
    };
  }

  handleClick() {
    this.setState({
      navOpen: true
    });
  }

  render() {
    if (this.state.navOpen) {
      return (
        <>
        <div className="header">
          <div className="logo">
            <a className="logo-text" href="#" onClick={this.handleClick}>
              Our Day
            </a>
          </div>
          <span id="current-page">Profile</span>
        </div>
        <SideNav />
        </>
      );
    } else {
      return (
        <div className="header">
          <div className="logo">
            <a className="logo-text" href="#" onClick={this.handleClick}>
              Our Day
            </a>
          </div>
          <span id="current-page">Profile</span>
        </div>
      );
    }
  }
}

// function Header(props) {
//   return (
//     // clicking logo should open nav
//     <div className="header">
//       <div className="logo">
//         <a className="logo-text" href="#" toggleNav={props.toggleNav}>
//           Our Day
//         </a>
//       </div>
//       <span id="current-page">Profile</span>
//     </div>
//   );
// }

export default Header;
