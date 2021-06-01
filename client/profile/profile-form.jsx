import React from 'react';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      partnerName: '',
      weddingDate: '2022-05-31'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    if (target.name === 'user-name') {
      this.setState({
        userName: target.value
      });
    } else if (target.name === 'partner-name') {
      this.setState({
        partnerName: target.value
      });
    } else {
      this.setState({
        weddingDate: target.value
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const update = {
      userName: this.state.userName,
      partnerName: this.state.partnerName,
      weddingDate: this.state.weddingDate
    };
    this.props.onSubmit(update);
  }

  render() {
    return (
      <div className="profile-page">
        <form className="profile-form" onSubmit={this.handleSubmit}>
          <label className="profile-label" >Your Name</label>
          <input
          required
          type="text"
          name="user-name"
          className="profile-input"
          placeholder="Your Name"
          defaultValue=""
          onChange={this.handleChange}
          />
          <label className="profile-label">Partner&apos;s Name</label>
          <input
          required
          type="text"
          name="partner-name"
          className="profile-input"
          placeholder="Partner&apos;s Name"
          defaultValue=""
          onChange={this.handleChange}
          />
          <label className="profile-label">Wedding Date</label>
          <input
          required
          type="date"
          name="date"
          className="profile-input"
          defaultValue="2022-05-31"
          onChange={this.handleChange}
          />
          <button type="submit" className="save-profile">Save</button>
        </form>
      </div>
    );
  }
}

export default ProfileForm;
