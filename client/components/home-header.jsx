import React from 'react';

class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.isClicked = this.isClicked.bind(this);
  }

  isClicked() {
    this.setState({
      isClicked: true
    });
  }

  render() {
    return (
      <div className="home-header">
        <div className="logo">
          <a className="logo-header" href="#" onClick={this.toggleNav}>
            Our Day
          </a>
        </div>
        <span className="couple-names">User &amp; Partner</span>
      </div>
    );
  }

}

export default HomeHeader;
