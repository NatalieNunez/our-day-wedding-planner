import React from 'react';

class GuestFooter extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({
      isClicked: true
    });
  }

  closeModal() {
    this.setState({
      isClicked: false
    });
  }

  render() {
    const isClicked = this.state.isClicked;
    const openModal = 'modal-open';
    const closeModal = 'guest-modal';
    return (
      <>
        <div className="guest-footer">
        <h4 className="add-guest-text" onClick={this.handleClick}>Add a guest</h4>
        <button className="add-guest-btn" onClick={this.handleClick}>
          <i className="fas fa-plus add-guest-icon"></i>
        </button>
      </div>

      <div id={isClicked ? openModal : closeModal}>
        <div id="guest-modal-box">
          <form id="guest-form">
            <div className="modal-btns">
              <button className="guest-btn cancel" type="button" onClick={this.closeModal}>Cancel</button>
              <button className="guest-btn save" type="submit">Save</button>
            </div>
            <div className="row">
              <div className="divider"></div>
              <label className="add-guest-label">Add Guest</label>
              <div className="inputs">
                <input required autoFocus id="first-name" placeholder="First Name" type="text" />
                <input required autoFocus id="last-name" placeholder="Last Name" type="text"/>
              </div>
            </div>
          </form>
        </div>
      </div>
      </>
    );
  }
}

export default GuestFooter;
