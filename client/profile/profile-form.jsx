import React from 'react';

class ProfileForm extends React.Component {
  render() {
    return (
      <div className="profile-page">
        <form className="profile-form">
          <label className="profile-label" >Your Name</label>
          <input type="text" name="user-name" className="user-name profile-input" placeholder="Your Name" />
          <label className="profile-label">Partner&apos;s Name</label>
          <input type="text" name="partner-name" className="partner-name profile-input" placeholder="Partner&apos;s Name" />
          <label className="profile-label">Wedding Date</label>
          <input type="date" className="profile-input" />
          <button type="submit" className="save-profile">Save</button>
        </form>
      </div>
    );
  }
}

export default ProfileForm;
