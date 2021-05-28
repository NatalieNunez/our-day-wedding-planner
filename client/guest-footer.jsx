import React from 'react';

class GuestFooter extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {

  }

  render() {
    return (
      <div className="guest-footer">
        <span className="add-guest-text">Add a guest</span>
        <button className="add-guest-btn">
          <i className="fas fa-plus add-guest-icon"></i>
        </button>
      </div>
    );
  }
}

export default GuestFooter;
