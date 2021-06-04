import React from 'react';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      partnerName: '',
      weddingDate: '2022-05-31',
      editViewOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setProfile();
  }

  setProfile() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => {
        this.setState({
          userName: users[0].userName,
          partnerName: users[0].partnerName,
          weddingDate: users[0].weddingDate
        });
      });
  }

  handleClick() {
    const editViewOpen = this.state.editViewOpen;
    this.setState({
      editViewOpen: !editViewOpen
    });
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
      <>
        <div className="profile-page">
          <div className={`view-profile ${this.state.editViewOpen ? 'hidden' : 'show'}`}>
            <label className="profile-info" >Your Name</label>
            <span className="profile-input">{this.state.userName}</span>
            <div className="divider profile"></div>

            <label className="profile-info">Partner&apos;s Name</label>
            <span className="profile-input">{this.state.partnerName}</span>
            <div className="divider profile"></div>

            <label className="profile-info">Wedding Date</label>
            <span className="profile-input">{this.state.weddingDate}</span>
            <div className="divider profile"></div>
            <div className="profile-btn-div">
              <button type="button" className="edit-profile" onClick={this.handleClick}>Edit</button>
            </div>
          </div>

          <form className={`profile-form ${this.state.editViewOpen ? 'show' : 'hidden'}`} onSubmit={this.handleSubmit}>
            <label className="profile-label">Your Name</label>
            <input
            required
            type="text"
            name="user-name"
            className="profile-input"
            placeholder="Your Name"
            defaultValue={this.state.userName}
            onChange={this.handleChange}
            />
            <div className="divider profile"></div>
            <label className="profile-label">Partner&apos;s Name</label>
            <input
            required
            type="text"
            name="partner-name"
            className="profile-input"
            placeholder="Partner&apos;s Name"
            defaultValue={this.state.partnerName}
            onChange={this.handleChange}
            />
            <div className="divider profile"></div>
            <label className="profile-label">Wedding Date</label>
            <input
            required
            type="date"
            name="date"
            className="profile-input"
            defaultValue={this.state.weddingDate}
            onChange={this.handleChange}
            />
            <div className="divider profile"></div>
            <div className="profile-btn-div">
              <button type="submit" className="save-profile" onClick={this.handleClick} >Save</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default ProfileForm;
