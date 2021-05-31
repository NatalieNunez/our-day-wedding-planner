import React from 'react';

class ProfileForm extends React.Component {
  render() {
    return (
      <div className="profile-page">
        <form className="profile-form">
          <label>
            Your Name
            <input type="text" name="user-name" className="user-name" />
          </label>
        </form>
      </div>
    );
  }
}

export default ProfileForm;
