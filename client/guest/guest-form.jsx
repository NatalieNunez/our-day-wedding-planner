import React from 'react';

class GuestForm extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.optionChange = this.optionChange.bind(this);
    this.state = {
      modalOpen: false,
      firstName: '',
      lastName: '',
      status: 'invited'
    };
  }

  toggleModal() {
    const modalOpen = this.state.modalOpen;
    this.setState({
      modalOpen: !modalOpen
    });
  }

  handleChange(event) {
    const target = event.target;
    if (target.name === 'first-name') {
      this.setState({
        firstName: target.value
      });
    } else {
      this.setState({
        lastName: target.value
      });
    }
  }

  optionChange(event) {
    this.setState({
      status: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGuest = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      status: this.state.status
    };
    this.props.onSubmit(newGuest);
    this.setState({
      firstName: '',
      lastName: '',
      status: 'invited'
    });
  }

  render() {
    const modalOpen = this.state.modalOpen;
    return (
      <>
        <div className="guest-footer">
        <h4 className="add-guest-text" onClick={this.toggleModal}>Add a guest</h4>
        <button className="add-guest-btn" onClick={this.toggleModal}>
          <i className="fas fa-plus add-guest-icon"></i>
        </button>
      </div>
      <div id={modalOpen ? 'modal-open' : 'guest-modal'}>
        <div id="guest-modal-box">
          <form id="guest-form" onSubmit={this.handleSubmit}>
            <div className="modal-btns">
              <button className="guest-btn close" type="button" onClick={this.toggleModal}>Close</button>
              <button className="guest-btn save" type="submit">Save</button>
            </div>
            <div className="row">
              <div className="divider"></div>
              <label className="add-guest-label">Add Guest</label>
              <div className="inputs">
                <input required autoFocus id="first-name" placeholder="First Name" type="text" name="first-name" value={this.state.firstName} onChange={this.handleChange}/>
                <input required autoFocus id="last-name" placeholder="Last Name" type="text" name="last-name" value={this.state.lastName} onChange={this.handleChange}/>
              </div>
              <div className="status-options">
                <label className="radio-label invited" >Invited
                  <input
                  type="radio"
                  name="status"
                  value="invited"
                  className="radio-custom"
                  checked={this.state.status === 'invited'}
                  onChange={this.optionChange} />
                </label>
                <label className="radio-label attending">Attending
                  <input
                  type="radio"
                  name="status"
                  value="attending"
                  className="radio-custom"
                  checked={this.state.status === 'attending'}
                  onChange={this.optionChange} />
                </label>
                <label className="radio-label not-attending">Not Attending
                  <input
                  type="radio"
                  name="status"
                  value="not-attending"
                  className="radio-custom"
                  checked={this.state.status === 'not-attending'}
                  onChange={this.optionChange} />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      </>
    );
  }
}

export default GuestForm;
