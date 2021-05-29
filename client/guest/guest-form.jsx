import React from 'react';

class GuestForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getAllGuests = this.getAllGuests.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      isClicked: false,
      firstName: '',
      lastName: ''
    };
  }

  handleClick() {
    const isClicked = this.state.isClicked;
    this.setState({
      isClicked: !isClicked
    });
  }

  handleChange(event) {
    const target = event.target;
    if (target.name === 'first-name') {
      this.setState({
        firstName: target.value
      });
    }
    this.setState({
      lastName: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const form = document.getElementById('guest-form');
    const newGuest = {
      firstName,
      lastName
    };
    this.props.onSubmit(newGuest);
    form.reset();
  }

  getAllGuests() {
    fetch('/api/guests')
      .then(res => res.json())
      .then(guests => {
        this.setState({
          guests
        });
      });
  }

  componentDidMount() {
    this.getAllGuests();
  }

  render() {
    const isClicked = this.state.isClicked;
    return (
      <>
        <div className="guest-footer">
        <h4 className="add-guest-text" onClick={this.handleClick}>Add a guest</h4>
        <button className="add-guest-btn" onClick={this.handleClick}>
          <i className="fas fa-plus add-guest-icon"></i>
        </button>
      </div>
      <div id={isClicked ? 'modal-open' : 'guest-modal'}>
        <div id="guest-modal-box">
          <form id="guest-form" onSubmit={this.handleSubmit}>
            <div className="modal-btns">
              <button className="guest-btn cancel" type="button" onClick={this.handleClick}>Cancel</button>
              <button className="guest-btn save" type="submit">Save</button>
            </div>
            <div className="row">
              <div className="divider"></div>
              <label className="add-guest-label">Add Guest</label>
              <div className="inputs">
                <input required autoFocus id="first-name" placeholder="First Name" type="text" name="first-name" onChange={this.handleChange}/>
                <input required autoFocus id="last-name" placeholder="Last Name" type="text" name="last-name" onChange={this.handleChange}/>
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
