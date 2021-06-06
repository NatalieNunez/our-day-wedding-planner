import React from 'react';
import SideNav from './side-nav';

class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
      userName: '',
      partnerName: '',
      image: '',
      weddingDate: '',
      daysLeft: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setHeader();
  }

  setHeader() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => {
        this.setState({
          userName: users[0].userName,
          partnerName: users[0].partnerName,
          image: users[0].image,
          weddingDate: users[0].weddingDate
        });
      });
  }

  handleClick() {
    const navOpen = this.state.navOpen;
    this.setState({
      navOpen: !navOpen
    });
  }

  render() {
    const navOpen = this.state.navOpen;
    const userName = this.state.userName;
    const partnerName = this.state.partnerName;
    if (navOpen) {
      return (
        <>
        <SideNav isNavOpen={this.handleClick} />
        <div className="home-header">
          <img className="header-img" src={this.state.image} alt="wedding-photo" />
          <div className="logo">
            <button className="logo-header" onClick={this.handleClick}>
              Our Day
            </button>
          </div>
          <span className="couple-names">{`${userName} & ${partnerName}`}</span>
        </div>
        </>
      );
    } else {
      return (
        <div className="home-header">
          <img className="header-img" src={this.state.image} alt="wedding-photo" />
          <div className="logo">
            <button className="logo-header" onClick={this.handleClick}>
              Our Day
            </button>
          </div>
          <span className="couple-names">{`${userName} + ${partnerName}`}</span>
        </div>
      );
    }
  }
}

export default HomeHeader;
