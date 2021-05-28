import React from 'react';

class GuestFooter extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({
      isClicked: true
    });
  }

  render() {
    return (
      <div className="guest-footer">
        <h4 className="add-guest-text" onClick={this.handleClick}>Add a guest</h4>
        <button className="add-guest-btn" onClick={this.handleClick}>
          <i className="fas fa-plus add-guest-icon"></i>
        </button>
      </div>
    );
  }
}

export default GuestFooter;
