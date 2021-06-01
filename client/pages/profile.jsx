import React from 'react';
import Header from '../components/header';
import ProfileForm from '../profile/profile-form';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.updateProfile = this.updateProfile.bind(this);
  }

  updateProfile(update) {
    fetch('/api/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(update)
    })
      .then(res => res.json())
      .then(update => {
        const newUsersArray = this.state.users.slice();
        newUsersArray.pop();
        newUsersArray.push(update);
        this.setState({
          users: newUsersArray
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <Header />
        <ProfileForm onSubmit={this.updateProfile} onClick={this.changeView} />
      </>
    );
  }
}
