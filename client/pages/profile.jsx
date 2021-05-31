import React from 'react';
import Header from '../header';
import ProfileForm from '../profile/profile-form';

export default class Profile extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ProfileForm />
      </>
    );
  }
}
